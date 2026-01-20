import 'dotenv/config'
import express  from 'express';
import type { Application, Request, Response } from 'express'
import { loggerMiddleware } from './middleware/logger.js';
import bookRoutes from './routes/book.routes.js';
import authorRoutes from './routes/author.routes.js';

const app: Application = express();
const PORT:string = process.env.PORT!;

// Middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    imp:"NIVU HELIDU NANAGE ARTHA AGILA, YAK ANDRE NANAGE KANNADA GOTILYA",
    routes: ['/books', '/author'],
    subroute:{create:"/create","search By Id":"/:id",delete:"/books/:id"}
  });
});

app.use('/books', bookRoutes);
app.use('/author', authorRoutes);

app.listen(PORT, () => {
  console.log(`🚀 HTTP server is running on http://localhost:${PORT}`);
});