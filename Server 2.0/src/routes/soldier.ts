import { getSoldiers, createSoldier, updateSoldier, deleteSoldier } from '../CONTROLLERS/soldier';
import { SoldierSchemaValidate } from '../model/soldier';
import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getSoldiers();
  res.status(200).send(service);
});

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = SoldierSchemaValidate.validate(req.body);
  if (error) {
    res.send(error.message);
  } else {
    const service = await createSoldier(value);
    res.status(200).send(service);
  }
});


router.delete('/', cors(corsOptions), async (req:Request, res:Response) => {
  const service = await deleteSoldier(req.body.id)
  res.status(200).send(service)
});

router.put('/', cors(corsOptions), async (req:Request, res:Response) => {
  const service = await updateSoldier(req.body.id, req.body)
  res.status(200).send(service)
});

export default router;
