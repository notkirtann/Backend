import express from 'express'
import { createUser, getAllUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/all',getAllUser)
router.post('/create',createUser)

export default router;