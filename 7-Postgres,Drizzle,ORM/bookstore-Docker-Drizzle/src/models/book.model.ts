import {pgTable,varchar,uuid,text,index} from 'drizzle-orm/pg-core'
import { authorModel } from './author.model'

const BookModel = pgTable('books',{
    id: uuid().primaryKey().defaultRandom(),
    title:varchar({length:400}).notNull(),
    description: text(),
    authorId:uuid().references(()=>authorModel.id).notNull()
},(table)=>({
    searchIndexOnTitle:index('title-index').on(table.title) 
}))

export {
    BookModel
}
