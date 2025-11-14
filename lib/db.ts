import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({
    url: "file:db.sqlite", // filename of your db
  });

export const db = drizzle(client);

