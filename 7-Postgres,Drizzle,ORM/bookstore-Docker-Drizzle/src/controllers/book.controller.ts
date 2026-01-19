import {type Request, type Response } from 'express';
import { BookModel } from '../models/book.model';

type Books={
  id:any,
  title:string,
  description:string,
  authorID:any
}

const getAllBooks = (req: Request, res: Response): void => {
  res.json(BookModel);
};

const getBookByID = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id as string, 10);

  if (isNaN(id)) {
    res.status(400).json({ error: 'id must be of type number' });
    return;
  }

  const book = BookModel.find((b: Books) => b.id === id);

  if (!book) {
    res.status(404).json({ error: `Book with id ${id} does not exist` });
    return;
  }

  res.json(book);
};

const createBook = (req: Request, res: Response): void => {
  const { title, author } = req.body as {
    title?: string;
    author?: string;
  };

  if (!title || !author) {
    res.status(400).json({
      error: 'Both title and author are required.',
    });
    return;
  }

  const id: number = BookModel.length + 1;

  const book = { id, title, author };
  // BookModel.push(book);

  res.status(201).json({
    message: 'Book Created success',
    id,
  });
};

const deleteBook = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id as string, 10);

  if (isNaN(id)) {
    res.status(400).json({ error: 'id must be of type number' });
    return;
  }

  const indexToDelete = BookModel.findIndex((book: Books) => book.id === id);

  if (indexToDelete === -1) {
    res.status(404).json({ error: `Book with ID ${id} not found.` });
    return;
  }

  // BookModel.splice(indexToDelete, 1);
  res.status(204).send();
};

export default {
  getAllBooks,
  getBookByID,
  createBook,
  deleteBook,
};