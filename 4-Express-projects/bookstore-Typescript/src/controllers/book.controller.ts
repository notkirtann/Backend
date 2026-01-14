import { Request, Response } from 'express';
import books, { Books } from '../models/books';

const getAllBooks = (req: Request, res: Response): void => {
  res.json(books);
};

const getBookByID = (req: Request, res: Response): Response | void => {
  const id: number = parseInt(req.params.id as string, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'id must be of type number' });
  }

  const book = books.find((b: Books) => b.id === id);

  if (!book) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist` });
  }

  return res.json(book);
};

const createBook = (req: Request, res: Response): Response => {
  const { title, author } = req.body as {
    title?: string;
    author?: string;
  };

  if (!title || !author) {
    return res.status(400).json({
      error: 'Both title and author are required.',
    });
  }

  const id: number = books.length + 1;

  const book: Books = { id, title, author };
  books.push(book);

  return res.status(201).json({
    message: 'Book Created success',
    id,
  });
};

const deleteBook = (req: Request, res: Response): Response | void => {
  const id: number = parseInt(req.params.id as string, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'id must be of type number' });
  }

  const indexToDelete = books.findIndex(
    (book: Books) => book.id === id
  );

  if (indexToDelete === -1) {
    return res
      .status(404)
      .json({ error: `Book with ID ${id} not found.` });
  }

  books.splice(indexToDelete, 1);
  return res.status(204).json({ message: 'book deleted' });
};

export default {
  getAllBooks,
  getBookByID,
  createBook,
  deleteBook,
};
