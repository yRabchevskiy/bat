import express, { Request, Response } from 'express';
import { getUserById, getUsers } from '../CONTROLLERS/user';
import { IApiRes } from '../model/api';
import { corsOptions } from '../cors/cors.option';
const cors = require('cors');

const router = express.Router();

router.get('/', cors(corsOptions), async (req: Request, res: Response) => {
  const service = await getUsers();
  res.status(200).send(service);
});

router.get('/:id', cors(corsOptions), async (req: Request, res: Response) => {
  const service: IApiRes = await getUserById(req.params.id);
  res.status(service.code).send(service);
});


// router.post('/', async (req: Request, res: Response) => {
//   const { error, value } = VisitSchemaValidate.validate(req.body);
//   if (error) {
//     res.send(error.message);
//   } else {
//     const service = await createVisit(value);
//     res.status(200).send(service);
//   }
// });


// router.delete('/', async (req:Request, res:Response) => {
//   const service = await deleteVisit(req.body.id)
//   res.status(200).send(service)
// });

// router.put('/', async (req:Request, res:Response) => {
//   const service = await updateVisit(req.body.id, req.body)
//   res.status(200).send(service)
// });
export default router;
