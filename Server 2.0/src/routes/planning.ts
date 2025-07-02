import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { API_CODE, API_STATUS } from '../model/api';
import { createPlanning, getPlanning } from '../CONTROLLERS/planning';
import { PlanningSchemaValidate } from '../model/planning/validation_schema';
import { IPlanningPostData } from '../model/planning/interface';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getPlanning();
  res.status(200).send(service);
});

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  
  const { error, value } = PlanningSchemaValidate.validate(req.body as IPlanningPostData);
  if (error) {
    const api_res = {
      data: null,
      status: API_STATUS.FAILED,
      message: error.message,
      code: API_CODE.API_500
    }
    res.status(API_CODE.API_500).send(api_res);
  } else {
    const service = await createPlanning(value);
    res.status(API_CODE.API_200).send(service);
  }
});

export default router;