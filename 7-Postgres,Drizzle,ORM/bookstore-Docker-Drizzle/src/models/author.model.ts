import {varchar,uuid,integer, pgTable} from 'drizzle-orm/pg-core'

const authorModel = pgTable('author',{
    id: uuid().primaryKey().defaultRandom(),
    firstName: varchar({length:55}).notNull(),
    lastName:varchar({length:55}),
    email:varchar().notNull().unique()
})

export {
    authorModel
}