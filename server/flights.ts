"use server";

import { db } from "@/db/drizzle";
import { flight } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth"
import { headers } from "next/headers" 


export const getAllFlights = async () => {
  const flights = await db.select().from(flight);
  return flights;
};


type CreateFlightInput = {
  airline: string
  from: string
  to: string
  status: string
  notes?: string
}

export const createFlight = async (data: CreateFlightInput) => {
  const session = await auth.api.getSession({ headers: headers() })
  const userId = session?.user?.id

  if (!userId) throw new Error("Unauthorized")

  await db.insert(flight).values({
    airline: data.airline,
    from: data.from,
    to: data.to,
    status: data.status,
    notes: data.notes ?? null,
    postedBy: userId,
  })
}

export const updateFlight = async (
  id: string,
  data: {
    airline: string
    from: string
    to: string
    status: string
    notes?: string
  }
) => {
  const session = await auth.api.getSession({ headers: headers() })
  const userId = session?.user?.id

  if (!userId) throw new Error("Unauthorized")

  await db.update(flight)
    .set({
      airline: data.airline,
      from: data.from,
      to: data.to,
      status: data.status,
      notes: data.notes ?? null,
    })
    .where(eq(flight.id, id))
}

export const deleteFlight = async (id: string) => {
  const session = await auth.api.getSession({ headers: headers() })
  const userId = session?.user?.id

  if (!userId) throw new Error("Unauthorized")

  await db.delete(flight).where(eq(flight.id, id))
}