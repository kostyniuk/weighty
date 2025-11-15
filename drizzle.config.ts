import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./lib/schema.ts",
  out: "./drizzle",
  casing: "snake_case",
  dbCredentials: {
    url: "file:db.sqlite",
  }
});