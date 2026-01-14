import express from 'express'
import controllers from '../controllers/book.controller';

const router = express.Router()

router.get('/', controllers.getAllBooks );

// GET /books/:id - Get a book by ID
router.get('/:id', controllers.getBookByID);

router.post('/',controllers.createBook)

router.delete('/:id',controllers.deleteBook );

export default router;