import express, { Request, Response } from 'express';
import { Database } from 'sqlite';
import { User } from '../models/user';

const router = express.Router();



export function userRoutes(db: Database) {
  router.get('/', async (req: Request, res: Response) => {
    const users = await db.all<User[]>('SELECT * FROM users');
    res.json(users);
  });

  router.post('/', async (req: Request, res: Response) => {
    const { name, email, birthday } = req.body;
    const result = await db.run('INSERT INTO users (name, email, birthday) VALUES (?, ?, ?)', [name, email, birthday]);
    const userId = result.lastID;
    const newUser: User = { id: userId, name, email, birthday };
    res.status(201).json(newUser);
  });

  return router;
}