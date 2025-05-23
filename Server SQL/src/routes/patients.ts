import express, { Request, Response } from 'express';
import { Database } from 'sqlite';
import { Patient } from '../models/patient';

const router = express.Router();

export function patientRoutes(db: Database) {
  router.get('/', async (req: Request, res: Response) => {
    const patients = await db.all<Patient[]>('SELECT * FROM patients');
    res.json(patients);
  });

  router.post('/', async (req: Request, res: Response) => {
    const { name, diagnosis } = req.body;
    const result = await db.run('INSERT INTO patients (name, diagnosis) VALUES (?, ?)', [name, diagnosis]);
    const patientId = result.lastID;
    const newPatient: Patient = { id: patientId, name, diagnosis };
    res.status(201).json(newPatient);
  });

  return router;
}