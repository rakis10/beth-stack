import { InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("content").notNull(),
  completed: integer("completed", { mode: "boolean" }).notNull().default(false),
});
export const shoppingItems = sqliteTable("shoppingItems", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  purchased: integer("purchased", { mode: "boolean" }).notNull().default(false),
});

export type Shopping = InferModel<typeof shoppingItems>;

export type Todo = InferModel<typeof todos>;
