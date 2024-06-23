// import { serial, varchar } from "drizzle-orm/mysql-core";
// import { integer, pgTable } from "drizzle-orm/pg-core";

// export const Top20Ideas=pgTable('ideas',{
//     id:serial('id').primaryKey(),
//     content:varchar('content').notNull(),
//     username:varchar('username').notNull(),
//     vote:integer('vote').default(0),
//     createdAt:varchar('createdAt').notNull()
// });
import { serial, varchar, integer, pgTable } from "drizzle-orm/pg-core";

export const Ideas = pgTable('ideas', {
  id: serial('id').primaryKey(),
  content: varchar('content').notNull(),
  username: varchar('username').notNull(),
  vote: integer('vote').default(0),
  createdAt: varchar('createdAt').notNull(),
});
