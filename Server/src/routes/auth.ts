import { login } from '../CONTROLLERS/user';
import { API_CODE } from '../model/api';
import { AuthSchemaValidate } from '../model/user';
import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
const cors = require('cors');

const router = express.Router();

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = AuthSchemaValidate.validate(req.body);
  if (error) {
    res.status(API_CODE.API_404).send(error.message);
  } else {
    const service = await login(value);
    res.status(service.code).send(service);
  }
});

export default router;
