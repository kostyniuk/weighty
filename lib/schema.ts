import { sql } from 'drizzle-orm';
import { index, real, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { sqliteTable, text, integer} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
}, (table) => [
  uniqueIndex('idx_users_email').on(table.email),
]);

export const weightHistory = sqliteTable('weight_history', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: integer({ mode: 'number' }).references(() => users.id),
  weight: real().notNull(),
  date: text().default(sql`(CURRENT_DATE)`).notNull(),
}, (table) => [
  index('idx_weight_history_user_id').on(table.userId),
  index('idx_weight_history_date').on(table.date),
]);

export const burnedHistory = sqliteTable('burned_history', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: integer({ mode: 'number' }).references(() => users.id),
  burned: real().notNull(),
  date: text().default(sql`(CURRENT_DATE)`).notNull(),
}, (table) => [
  index('idx_burned_history_user_id').on(table.userId),
  index('idx_burned_history_date').on(table.date),
]);

export const distanceHistory = sqliteTable('distance_history', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: integer({ mode: 'number' }).references(() => users.id),
  distance: real().notNull(),
  date: text().default(sql`(CURRENT_DATE)`).notNull(),
}, (table) => [
  index('idx_distance_history_user_id').on(table.userId),
  index('idx_distance_history_date').on(table.date),
]);

