import express, { type Router } from 'express'
import {createUser} from '../controllers/user.controller.js'

const router:Router = express.Router()

router.post('/signup',createUser)

// router.post('/signup',CreateUser)

export default router;