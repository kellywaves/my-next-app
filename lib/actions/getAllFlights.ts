"use server";

import { db } from "@/db/drizzle";
import { flight } from "@/db/schema";

export const getAllFlights = async () => {
  return await db.select().from(flight);
};
