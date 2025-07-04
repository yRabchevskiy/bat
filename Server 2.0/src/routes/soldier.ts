import { getSoldiers, createSoldier, updateSoldier, deleteSoldier } from '../CONTROLLERS/soldier';

import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { SoldierSchemaValidate } from '../model/soldier/validation_schema';
import { API_CODE, API_STATUS } from '../model/api';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getSoldiers();
  res.status(200).send(service);
});

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = SoldierSchemaValidate.validate(req.body);
  if (error) {
    const api_res = {
      data: null,
      status: API_STATUS.FAILED,
      message: error.message,
      code: API_CODE.API_500
    }
    res.status(API_CODE.API_500).send(api_res);
  } else {
    const service = await createSoldier(value);
    res.status(API_CODE.API_200).send(service);
  }
});


router.delete('/:id', cors(corsOptions), async (req:Request, res:Response) => {
  console.log('Delete Soldier', req.params.id);
  const service = await deleteSoldier(req.params.id)
  res.status(200).send(service)
});

router.put('/', cors(corsOptions), async (req:Request, res:Response) => {
  const service = await updateSoldier(req.body.id, req.body)
  res.status(200).send(service)
});

export default router;
