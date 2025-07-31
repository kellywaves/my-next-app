"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { updateFlight } from "@/server/flights"

import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Flight } from "@/types/flight"

const formSchema = z.object({
  airline: z.string().min(1),
  from: z.string().min(1),
  to: z.string().min(1),
  status: z.string().min(1),
  notes: z.string().optional(),
})

export function EditFlightForm({
  initialData,
  onSubmit,
}: {
  initialData: Flight
  onSubmit?: () => void
}) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      airline: initialData.airline,
      from: initialData.from,
      to: initialData.to,
      status: initialData.status,
      notes: initialData.notes ?? "",
    },
  })

  const isSubmitting = form.formState.isSubmitting

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await updateFlight(initialData.id, values)
      toast.success("Flight updated")
      router.refresh()
      onSubmit?.()
    } catch (err) {
      toast.error("Failed to update flight")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {["airline", "from", "to", "status", "notes"].map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as keyof z.infer<typeof formSchema>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{field.name || field.key}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Update Flight"
          )}
        </Button>
      </form>
    </Form>
  )
}
