import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull().unique(),
  avatar: varchar('avatar', { length: 256 }),
  googleId: varchar('googleId', { length: 256 }),
  discordId: varchar('discordId', { length: 256 }),
});