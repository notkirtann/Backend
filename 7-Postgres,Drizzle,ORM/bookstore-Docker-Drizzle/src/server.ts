import 'dotenv/config'
import express  from 'express';
import type { Application, Request, Response } from 'express'
import { loggerMiddleware } from './middleware/logger.js';
import bookRoutes from './routes/book.routes.js';

const app: Application = express();
const PORT:string = process.env.PORT!;

// Middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('go to routes of name /books');
});

app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 HTTP server is running on http://localhost:${PORT}`);
});