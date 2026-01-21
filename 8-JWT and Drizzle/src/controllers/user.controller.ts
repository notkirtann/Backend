import db from '../db/index.js'
import {usersTable,userSession} from '../models/user.model.js'
import type { Response, Request } from 'express'
import { eq } from 'drizzle-orm'
import { createHmac, randomBytes } from 'node:crypto'

const createUser = async function (req:Request,res:Response) {
    const {email,name,password} = req.body

    const [existingUser] = await db
        .select({email:usersTable.email})
        .from(usersTable)
        .where((table)=> eq(table.email, email))
    
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

const loginUser = async (req:Request,res:Response)=>{
    const {email,password} = req.body

    const [existingUser] = await db
        .select({
            id:usersTable.id,
            email:usersTable.email,
            salt :usersTable.salt,
            password:usersTable.password
        })
        .from(usersTable)
        .where((table)=> eq(table.email, email))
    
    if(!existingUser){
        return res.status(404).json({error:"User doesn't exist"})
    }
    
    const salt = existingUser.salt
    const existingHash = existingUser.password

    const newHash= createHmac('sha256',salt).update(password).digest('hex')

    if(newHash !== existingHash){
        return res.json({error:"Please enter the correct password"})
    }

    //@ genratring a session for a user 
    const [session] = await db.insert(userSession)
                    .values({userId:existingUser.id})
                    .returning({id:userSession.id})

    return res.json({result:"success",sessionId:session?.id})
}
export {
    createUser,
    loginUser
}