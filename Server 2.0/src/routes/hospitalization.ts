import express, { Request, Response } from 'express';
import { corsOptions } from '../cors/cors.option';
import { API_CODE, API_STATUS } from '../model/api';
import { createHospitalization, getHospitalizations } from '../CONTROLLERS/hospitalization';
import { HospitalizationSchemaValidate } from '../model/hospitalization/validation_schema';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getHospitalizations();
  res.status(200).send(service);
});


router.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  const { error, value } = HospitalizationSchemaValidate.validate(req.body);
  if (error) {
    const api_res = {
      data: null,
      status: API_STATUS.FAILED,
      message: error.message,
      code: API_CODE.API_500
    }
    res.status(API_CODE.API_500).send(api_res);
  } else {
    const service = await createHospitalization(value);
    res.status(API_CODE.API_200).send(service);
  }
});

export default router;