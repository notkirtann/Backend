import express from 'express';
import bookRouter from './routes/book.routes.js'
import { loggerMiddleware } from './middlewares/logger.js';

const app = express();
 
//MIDDLEWARES
app.use(express.json()) 
app.use(loggerMiddleware)

//ROUTES  
app.use('/books',bookRouter)

app.listen(8000, () => {
  console.log(`🚀 HTTP server is running on http://localhost:8000`);
});