import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  fullName: text('full_name'),
  address: text('address'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const carts = pgTable('carts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id').notNull().references(() => carts.id),
  productId: text('product_id').notNull(),
  quantity: integer('quantity').notNull().default(1),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  totalAmount: integer('total_amount').notNull(), // storing as cents or scaled
  shippingAddress: text('shipping_address').notNull(),
  status: text('status').notNull().default('processing'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').notNull().references(() => orders.id),
  productId: text('product_id').notNull(),
  name: text('name').notNull(),
  price: integer('price').notNull(), // storing as scaled value
  quantity: integer('quantity').notNull().default(1),
  size: text('size'),
  color: text('color'),
});

