import db from '../db/index.js'
import {usersTable} from '../models/user.model'
import type { Response, Request } from 'express'
import { eq } from 'drizzle-orm'
import { createHmac, randomBytes } from 'node:crypto'
import jwt from 'jsonwebtoken'

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
            name: usersTable.name,
            salt :usersTable.salt,
            role: usersTable.role,
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
        return res.status(401).json({error:"Please enter the correct password"})
    }

    const payload = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        role: existingUser.role,
      };
    
      const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' });
    
      return res.json({ status: 'success', token });
}

const updateUser = async (req:Request,res:Response) => {
  const { name } = req.body;
  await db.update(usersTable).set({ name }).where(eq(usersTable.id, req.user!.id));
  return res.json({ status: 'success' });
}

const getUser = async (req:Request,res:Response) => {
  return res.json({ user: req.user });
}

export {
    createUser,
    loginUser,
    updateUser,
    getUser
}