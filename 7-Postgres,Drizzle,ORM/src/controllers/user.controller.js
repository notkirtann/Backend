import db from'../db/index.js';
import {userTable} from '../../drizzle/schema.js'

async function getAllUser() {
    const user = db.select().from(userTable)
}

export {
    getAllUser
}