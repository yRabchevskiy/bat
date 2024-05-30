import { Router, Request, Response } from "express";
import { Soldier } from "../models/soldier";

const router = Router();

router.get("/", [], (req: Request, res: Response) => {
  try {
    Soldier.find({}).then((it: any) => {
      res.status(200).send(it || []);
    });
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const soldier = Soldier.createObj(req.body);
    await soldier.save();
    return res.status(200).send(soldier);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// router.post("/visit", async (req: Request<any>, res: Response<any>) => {
//   if (req.body.soldier_id) {
//     try {
//       const visit: IVisitPostData = { ...req.body };
//       delete visit.soldier_id;
//       delete visit.soldier_name;
//       let updatedSold = await Soldier.findByIdAndUpdate(req.body.soldier_id, { $push: { visits: visit } }, { new: true });
//       return res.status(200).send(updatedSold);
//     } catch (error) {
//       return res.status(500).send(error);
//     }
//   } else {
//     try {
//       const sold = Soldier.createByVisit(req.body);
//       await sold.save();
//       return res.status(200).send(sold);
//     } catch (error) {
//       return res.status(500).send(error);
//     }
//   }
// });

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    Soldier.findByIdAndDelete(req.params.id).then((it) => {
      res.status(200).send({ id: it?.id });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
});

export { router as soldierRouter };
