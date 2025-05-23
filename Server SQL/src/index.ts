import express, { Request, Response } from 'express';
import { initDB } from './db';
import { userRoutes } from './routes/users';
import { patientRoutes } from './routes/patients';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function startServer() {
  const db = await initDB();

  app.use('/users', userRoutes(db));
  app.use('/patients', patientRoutes(db));

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();