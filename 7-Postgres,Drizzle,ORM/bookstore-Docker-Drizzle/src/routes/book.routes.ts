import express, { Router } from 'express';
import controllers from '../controllers/book.controller.js';

const router: Router = express.Router();

router.get('/', controllers.getAllBooks);
router.get('/:id', controllers.getBookByID);
router.post('/create', controllers.createBook);
router.delete('/:id', controllers.deleteBook);

export default router;