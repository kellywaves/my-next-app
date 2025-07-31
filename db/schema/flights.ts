import {
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core"
import { user } from "../schema" 

export const flight = pgTable("flight", {
  id: text("id").primaryKey(),

  airline: text("airline").notNull(),
  from: text("from").notNull(),
  to: text("to").notNull(),
  status: text("status").notNull(),

  postedBy: text("posted_by")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

    notes: text("notes"),

  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),

  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
})
