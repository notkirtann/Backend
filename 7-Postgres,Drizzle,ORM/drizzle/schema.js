import { pgTable, integer, pgTable, varchar } from 'drizzle-orm/pg-core'

const UserTable = pgTable('User',{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length:255}).notNull(),
    age:integer().notNull(),
    email:varchar({length:255}).notNull().unique()
})

export default UserTable