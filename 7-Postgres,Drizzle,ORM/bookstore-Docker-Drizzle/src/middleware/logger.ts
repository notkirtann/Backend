import { type Request, type Response, type NextFunction } from 'express';
import fs from 'fs';

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const log = `${Date.now()}, ${req.method}, ${req.path}\n`;
  fs.appendFileSync('log.txt', log, 'utf-8');
  next();
}