import {type Request, type Response } from 'express';
import db from '../db/index.js';
import { BookModel } from '../models/book.model.js';
import { eq } from 'drizzle-orm';

type Books={
  id:any,
  title:string,
  description:string,
  authorID:any
}

const getAllBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await db.select().from(BookModel);
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

const getBookByID = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const book = await db
      .select()
      .from(BookModel)
      .where(eq(BookModel.id, id))
      .limit(1);

    if (!book || book.length === 0) {
      res.status(404).json({ error: `Book with id ${id} does not exist` });
      return;
    } 

    res.json(book[0]);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};

const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, authorId } = req.body as {
      title?: string;
      description?: string;
      authorId?: string;
    };

    if (!title || !authorId) {
      res.status(400).json({
        error: 'Both title and authorId are required.',
      });
      return;
    }

    const newBook = await db
      .insert(BookModel)
      .values({
        title,
        description: description || null,
        authorId,
      })
      .returning();

    res.status(201).json({
      message: 'Book created successfully',
      book: newBook[0],
    });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Failed to create book' });
  }
};

const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedBook = await db
      .delete(BookModel)
      .where(eq(BookModel.id, id))
      .returning();

    if (!deletedBook || deletedBook.length === 0) {
      res.status(404).json({ error: `Book with id ${id} not found` });
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

export default {
  getAllBooks,
  getBookByID,
  createBook,
  deleteBook,
};