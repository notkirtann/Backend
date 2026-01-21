import express, { type Router } from 'express'
import {createUser, loginUser} from '../controllers/user.controller.js'

const router:Router = express.Router()

router.post('/signup',createUser)

router.post('/login',loginUser)

export default router;