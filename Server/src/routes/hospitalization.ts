import { Router, Request, Response } from "express";
import { ISoldier, Soldier } from "../models/soldier";
import { Visit } from "../models/visits";
import { TYPE_OF_VISIT } from "../models/enum_types/general";

const router = Router();

router.get("/", [], async (req: Request, res: Response) => {
    try {
      const visits = await Visit.find({ type_of_visit: TYPE_OF_VISIT.HOSPITALIZATION }).populate({ path: 'soldier' }).exec();   
      return res.status(200).send(visits || []);
    } catch (err) {
        return res.status(500).send(err);    
    }
});

router.post("/", async (req: Request<any>, res: Response<any>) => {
  // console.log(req);
  // return res.status(200).send(req.body);
  let sold = null;
  await Soldier.find({ full_name: req.body.soldier_name }).then(item => {
    sold = item && item.length ? item[0] : null;
  }).catch(err => console.log(err));
  console.log(sold);
  if (!sold) {
    // console.log('sold UNDEFINED')
    // sold = Soldier.createByVisit(req.body);
    // console.log('new sold', sold._id);
    // await sold.save();
    // return res.status(200).send(sold.visits[0]);
  }
  return res.status(200).send(sold);
  // try {
  //   const obj = Hospitalization.createObj({ ...req.body, soldier: soldId });
  //   await obj.save();
  //   return res.status(200).send(obj);
  // } catch (err) {
  //   return res.status(400).send(err);
  // }
});

export { router as hospitalizationRouter };
