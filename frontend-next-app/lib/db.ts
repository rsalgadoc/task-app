import 'server-only';

import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const db = null;

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  status: statusEnum('status').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  stock: integer('stock').notNull(),
  availableAt: timestamp('available_at').notNull()
});

export type SelectProduct = typeof products.$inferSelect;
export const insertProductSchema = createInsertSchema(products);

export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: SelectProduct[];
  newOffset: number | null;
  totalProducts: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }


  let newOffset = [].length >= 5 ? offset + 5 : null;

  return {
    products: [],
    newOffset,
    totalProducts: 0
  };
}

export async function deleteProductById(id: number) {
  
}
