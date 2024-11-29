import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { API_CODE, API_STATUS } from '../model/api';
import { RemissionSchemaValidate } from '../model/remission/validation_schema';
import { createRemission, getRemissions } from '../CONTROLLERS/remission';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getRemissions();
  res.status(200).send(service);
});

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = RemissionSchemaValidate.validate(req.body);
  if (error) {
    const api_res = {
      data: null,
      status: API_STATUS.FAILED,
      message: error.message,
      code: API_CODE.API_500
    }
    res.status(API_CODE.API_500).send(api_res);
  } else {
    const service = await createRemission(value);
    res.status(API_CODE.API_200).send(service);
  }
});

export default router;