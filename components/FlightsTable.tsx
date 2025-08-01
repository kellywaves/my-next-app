"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateFlightForm } from "@/components/CreateFlightForm";
import type { Flight } from "@/types/flight";
import { EditFlightForm } from "@/components/EditFlightForm";
import { DeleteFlightDialog } from "./DeleteFlightDialog";
import Tags from "./comp-56";

type Props = {
  flights: Flight[];
};

export const FlightsTable = ({ flights }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [editFlight, setEditFlight] = React.useState<Flight | null>(null);

  return (
    <>
      <div className="flex flex-1 flex-col gap-2 p-2 pt-0 sm:gap-4 sm:p-4">
        <div className="min-h-[calc(100vh-4rem)] flex-1 rounded-lg p-3 sm:rounded-xl sm:p-4 md:p-6">
          <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between px-2">
                <Input
                  type="search"
                  placeholder="Search flights..."
                  className="max-w-sm"
                />

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button>Create Flight</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Flight</DialogTitle>
                      <DialogDescription>
                        Fill out the details below.
                      </DialogDescription>
                    </DialogHeader>
                    <CreateFlightForm onSubmit={() => setOpen(false)} />
                  </DialogContent>
                </Dialog>

                <Dialog
                  open={!!editFlight}
                  onOpenChange={() => setEditFlight(null)}
                >
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Flight</DialogTitle>
                      <DialogDescription>
                        Update flight details below.
                      </DialogDescription>
                    </DialogHeader>
                    {editFlight && (
                      <EditFlightForm
                        initialData={editFlight}
                        onSubmit={() => setEditFlight(null)}
                      />
                    )}
                  </DialogContent>
                </Dialog>

                {/* <Tags/> */}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Flights</CardTitle>
                  <CardDescription>
                    List of recently scheduled flights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>A list of recent flights.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Airline</TableHead>
                        <TableHead>From</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {flights.map((flight) => (
                        <TableRow key={flight.id}>
                          <TableCell>{flight.airline}</TableCell>
                          <TableCell>{flight.from}</TableCell>
                          <TableCell>{flight.to}</TableCell>
                          <TableCell>{flight.status}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditFlight(flight)}
                            >
                              Edit
                            </Button>

                            <DeleteFlightDialog flight={flight} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </>
  );
};
