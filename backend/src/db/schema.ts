import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable('Users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});