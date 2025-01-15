import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { API_CODE, API_STATUS } from '../model/api';
import { RemissionSchemaValidate } from '../model/remission/validation_schema';
import { createRemission, getRemissions } from '../CONTROLLERS/remission';
import { getVlks } from '../CONTROLLERS/vlk';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getVlks();
  res.status(200).send(service);
});

export default router;