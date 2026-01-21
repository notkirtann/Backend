import db from '../db/index.js'
import {usersTable} from '../models/user.model.js'
import type { Response, Request } from 'express'
import { eq } from 'drizzle-orm'
import { createHmac, randomBytes } from 'node:crypto'

const createUser = async function (req:Request,res:Response) {
    const {email,name,password} = req.body

    const existingUser = await db
        .select({email:usersTable.email})
        .from(usersTable)
        .where((table)=> eq(email,table.email))
    
    if(existingUser){
        return res.status(400).json({error:"User already exist"})
    }

    const salt = randomBytes(256).toString('hex');
    const hashedPassword= createHmac('sha256',salt).update(password).digest('hex')

    const [user] = await db.insert(usersTable)
                .values({name,
                    email,
                    password:hashedPassword,
                    salt
                })
                .returning({id:usersTable.id})
    
    return res.status(201).json({status:"success",data:{userId:user?.id}})
}

export {
    createUser
}