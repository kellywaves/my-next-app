import { getAllFlights } from "@/lib/actions/getAllFlights";
import { FlightsTable } from "@/components/FlightsTable";
import type { Flight } from "@/types/flight";


export default async function FlightsPage() {
  const flights: Flight[] = await getAllFlights();

  return <FlightsTable flights={flights} />;
}
