import db from'../db/index.js';
import {userTable} from '../../drizzle/schema.js'

async function getAllUser(req, res) {
    const users = await db.select().from(userTable)
    res.json(users)
}

async function createUser({id, name,age,email}) {
    await db.insert(userTable).values({
        id,name,age,email
    })
}

export {
    getAllUser,createUser
}
// createUser({"name":"Kirtan","age":22,"email":"contactmebhai@gmail.com"})