const jwt = require('jsonwebtoken')
import type { Request,Response,NextFunction } from 'express';

export const authenticationMiddleware = async function (req:Request, res:Response, next:NextFunction) {
  try {
    const tokenHeader = req.headers['authorization'];

    if (!tokenHeader) {
      return next();
    }

    if (!tokenHeader.startsWith('Bearer')) {
      return res
        .status(400)
        .json({ error: 'authorization header must start with Bearer' });
    }

    const token = tokenHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
    email: string;
    name: string;
    role: 'USER' | 'ADMIN';
  };
req.user = decoded;
    next();
  } catch (error) {
    next();
  }
};

export const ensureAuthenticated = async function (req:Request, res:Response, next:NextFunction) {
  if (!req.user) {
    return res.status(401).json({ error: 'You must be authenticated' });
  }

  next();
};

export const restrictToRole = function (role: 'USER' | 'ADMIN') {
  return function (req:Request, res:Response, next:NextFunction) {
    if (!req.user || req.user.role !== role) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this resource' });
    }
    return next();
  };
};
