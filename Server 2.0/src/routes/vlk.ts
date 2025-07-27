import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { createVlk, getVlks } from '../CONTROLLERS/vlk';
import { VlkSchemaValidate } from '../model/vlk/validation_schema';
import { IVlkPostData } from '../model/vlk/interface';
import { API_CODE, API_STATUS } from '../model/api';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getVlks();
  res.status(200).send(service);
});

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  
  const { error, value } = VlkSchemaValidate.validate(req.body as IVlkPostData);
  if (error) {
    const api_res = {
      data: null,
      status: API_STATUS.FAILED,
      message: error.message,
      code: API_CODE.API_500
    }
    res.status(API_CODE.API_500).send(api_res);
  } else {
    const service = await createVlk(value);
    res.status(API_CODE.API_200).send(service);
  }
});

export default router;