import { Router, Request, Response } from "express";
import { BatMap, IBatMap } from "../models/batMap";

const router = Router();

router.get("/", [], (req: Request, res: Response) => {
//   try {
//     BatMap.find({}).then((it: any) => {
//       res.status(200).send(it || []);
//     });
//   } catch (err) {
//     return res.status(400).send(err);
//   }
return res.status(400).send('not implemented')
});

router.get("/bat-map", [], (req: Request, res: Response) => {
  try {
    BatMap.find({}).then((data: IBatMap[]) => {
      const _data = data && data.length ? data[0] : null; 
      return res.status(200).send(_data);
    });
  } catch (err) {
    return res.status(400).send(err);
  }
});

export { router as homeRouter };
