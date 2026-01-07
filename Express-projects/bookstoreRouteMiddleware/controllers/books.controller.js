import books from '../models/books.js'

const getAllBooks = (req, res) => { //called customMiddleWare  when this function called
  res.json(books);
}

const getBookByID = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'id must be of type number' });
  }

  // The .find() method iterates over the array
  const book = books.find(e => e.id === id);

  if (!book) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist` });
  }
  
  return res.json(book);
}

const createBook = (req,res)=>{
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ 
      error: 'Both title and author are required.' 
    });
  }

  const id = books.length+1;

  const book= {id,title,author};
  books.push(book)  
  
  return res.status(201).json({message : 'Book Created success',id})
}

const deleteBook = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'id must be of type number' });
  }
  
  const indexToDelete = books.findIndex(book => book.id === id);

  if (indexToDelete === -1) {
    return res
      .status(404)
      .json({ error: `Book with ID ${id} not found.` });
  }

  books.splice(indexToDelete, 1);
  res.status(204).json({message:'book deleted'}); 
}

export default {getAllBooks,getBookByID,createBook, deleteBook};