import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { createStructureItem, getStructure } from '../CONTROLLERS/structure';
import { API_CODE, API_STATUS } from '../model/api';
import { GeneralUnitSchema } from '../model/structure/validation_schema';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getStructure();
  res.status(200).send(service);
});

router.post('/add-structure-item', async (req: Request, res: Response) => {
  const { name, data, structure_id } = req.body;
  const { error, value } = GeneralUnitSchema.validate({ name, data });
  if (error) {
    res.status(API_CODE.API_500).send({
      data: null,
      status: API_STATUS.FAILED,
      message: error.message,
      code: API_CODE.API_500
    });
  } else {
    const service = await createStructureItem(structure_id, value);
    res.status(service.code).send(service);
  }
 
});

export default router;
