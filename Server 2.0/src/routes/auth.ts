import { login } from '../CONTROLLERS/user';
import { API_CODE, API_STATUS } from '../model/api';
import { AuthSchemaValidate } from '../model/user';
import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
const cors = require('cors');

const router = express.Router();

let currentUser: any = null;

router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = AuthSchemaValidate.validate(req.body);
  if (error) {
    res.status(API_CODE.API_404).send(error.message);
  } else {
    const service = await login(value);
    if (service.status === API_STATUS.SUCCESS && service.data) {
      currentUser = service.data;
    } else {
      currentUser = null;
    }
    res.status(service.code).send(service);
  }
});

router.post('/auth-check', cors(corsOptions), async (req: Request, res: Response) => {
  console.log(currentUser)
  if (currentUser) {
    res.status(API_CODE.API_200).send(true);
  } else {
    res.status(API_CODE.API_404).send(false);
  }
});

router.post('/logout', cors(corsOptions), async (req: Request, res: Response) => {
  currentUser = null;
  res.status(API_CODE.API_200).send(true);
});

export default router;
