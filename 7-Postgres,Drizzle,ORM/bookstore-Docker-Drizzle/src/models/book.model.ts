import {pgTable,varchar,uuid,text} from 'drizzle-orm/pg-core'
import { authorTable } from './author.model'

const BookModel = pgTable('books',{
    id: uuid().primaryKey().defaultRandom(),
    title:varchar({length:400}).notNull(),
    description: text(),
    authorId:uuid().references(()=>authorTable.id).notNull()
})

export {
    BookModel
}