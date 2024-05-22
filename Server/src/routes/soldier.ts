import { Router, Request, Response } from "express";
import { Soldier } from "../models/soldier";

const router = Router();

router.get("/api/soldier", [], (req: Request, res: Response) => {
    try {
      console.log(req.body);
        Soldier.find({}).then((it: any) => {
            res.status(200).send(it || [])
        });   
    } catch (err) {
        return res.status(400).send(err);    
    }
});

router.post("/api/soldier", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const soldier = Soldier.createObj(req.body);
    await soldier.save();
    return res.status(200).send(soldier);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.delete("/api/soldier", async (req: Request, res: Response) => {
  try {
    console.log(req.body.id);
    Soldier.findByIdAndDelete(req.body.id).then(it => {
      console.log(it);
      res.status(200).send({ id: it?.id});
    });
  } catch (err) {
    return res.status(400).send(err);
  }
});

export { router as soldierRouter };
