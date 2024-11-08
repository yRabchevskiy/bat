import { getVisits, createVisit, updateVisit, deleteVisit } from '../CONTROLLERS/visit';
import { VisitSchemaValidate } from '../model/visit';
import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getVisits();
  res.status(200).send(service);
});

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = VisitSchemaValidate.validate(req.body);
  if (error) {
    res.send(error.message);
  } else {
    const service = await createVisit(value);
    res.status(200).send(service);
  }
});


router.delete('/', cors(corsOptions), async (req:Request, res:Response) => {
  const service = await deleteVisit(req.body.id)
  res.status(200).send(service)
});

router.put('/', cors(corsOptions), async (req:Request, res:Response) => {
  const service = await updateVisit(req.body.id, req.body)
  res.status(200).send(service)
});

export default router;
