import express, { type Router } from 'express'
import {createUser, loginUser, updateUser,getUser} from '../controllers/user.controller.js'
import { ensureAuthenticated } from '../middlewares/auth.middleware.js';

const router:Router = express.Router()

router.patch('/', ensureAuthenticated, updateUser);

router.get('/', ensureAuthenticated, getUser)

router.post('/signup',createUser)

router.post('/login',loginUser)

export default router;