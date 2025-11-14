import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Example schema - customize based on your needs
export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
});

