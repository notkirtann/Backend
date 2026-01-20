import {type Request, type Response } from 'express';
import db from '../db/index.js';
import { authorModel } from '../models/allModel.js';
import { eq } from 'drizzle-orm';

type Author={
  id:string,
  firstName:string,
  lastName:string | null,
  email:string,
  Books:{}
}

const getAllAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const author = await db.select().from(authorModel);
    res.json(author);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

const getAuthorByID = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const author = await db
      .select()
      .from(authorModel)
      .where(eq(authorModel.id, id as string))
      .limit(1);

    if (!author || author.length === 0) {
      res.status(404).json({ error: `Author with id ${id} does not exist` });
      return;
    } 

    res.json(author[0]);
  } catch (error) {
    console.error('Error fetching Author:', error);
    res.status(500).json({ error: 'Failed to fetch Author' });
  }
};

const createAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email } = req.body as {
      firstName?: string;
      lastName?: string;
      email?: string;
    };

    if (!firstName || !email) {
      res.status(400).json({
        error: 'Both firstName and email are required.',
      });
      return;
    }

    const newAuthor = await db
      .insert(authorModel)
      .values({
        firstName,
        lastName: lastName || null,
        email,
      })
      .returning({id:authorModel.id});

    res.status(201).json({
      message: 'Author data created successfully',
      book: newAuthor[0],
    });
  } catch (error) {
    console.error('Error creating author details:', error);
    res.status(500).json({ error: 'Failed to create author' });
  }
};

export{
    getAllAuthor,
    createAuthor,
    getAuthorByID
}