import { pgTable, integer, varchar } from 'drizzle-orm/pg-core'

const userTable = pgTable('User',{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length:255}).notNull(),
    age:integer().notNull(),
    email:varchar({length:255}).notNull().unique()
})

export { userTable } 