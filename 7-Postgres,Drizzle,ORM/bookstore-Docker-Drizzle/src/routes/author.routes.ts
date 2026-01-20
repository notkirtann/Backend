import express, { Router } from 'express';
import {getAllAuthor,createAuthor,getAuthorByID} from '../controllers/author.controller.js';

const router: Router = express.Router();

router.get('/', getAllAuthor);
router.get('/:id', getAuthorByID);
router.post('/create', createAuthor);

export default router;