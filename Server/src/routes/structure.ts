import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { getStructure } from '../CONTROLLERS/structure';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getStructure();
  res.status(200).send(service);
});


export default router;
