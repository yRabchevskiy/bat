import { Router, Request, Response } from "express";
import { IVisit, Visit } from "../models/visits";
import { TYPE_OF_VISIT } from "../models/enum_types/general";
import { Soldier } from "../models/soldier";
import mongoose, { ObjectId } from "mongoose";
import { castNumberToVisitsEnum } from "../helpers/visits.helper";

const router = Router();

router.get("/", [], async (req: Request, res: Response) => {
  try {
    const visits = await Visit.find({}).populate({ path: "soldier" }).exec();
    return res.status(200).send(visits || []);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:visitsType", [], async (req: Request, res: Response) => {
  try {
    const visits = await Visit.find({ type_of_visit: req.params.visitsType }).populate({ path: "soldier" }).exec();
    return res.status(200).send(visits || []);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/", async (req: Request<IVisit>, res: Response<any>) => {
  try {
    const visit = Visit.createObj(req.body);
    await visit.save();
    return res.status(200).send(visit);
  } catch (err) {
    return res.status(500).send(err);
  }
  //   const {
  //     soldier_id,
  //     soldier_full_name,
  //     date_in,
  //     date_out,
  //     pre_diagnosis,
  //     final_diagnosis,
  //     hospital_name,
  //     type_of_visit,
  //     type_of_disease,
  //     complaint,
  //     recomendation,
  //   } = req.body;
  //   if (soldier_id) {
  //     try {
  //       const visit = Visit.createObj({
  //         soldier: soldier_id,
  //         date_in,
  //         date_out,
  //         pre_diagnosis,
  //         final_diagnosis,
  //         hospital_name,
  //         type_of_disease,
  //         type_of_visit,
  //         complaint,
  //         recomendation,
  //       });
  //       await visit.save();
  //       return res.status(200).send(visit);
  //     } catch (err) {
  //       return res.status(500).send(err);
  //     }
  //   } else {
  //     let sold = null;
  //     try {
  //       sold = Soldier.createByVisit(soldier_full_name);
  //       await sold.save();
  //     } catch (error) {
  //       return res.status(500).send(error);
  //     }
  //     try {
  //       const visit = Visit.createObj({
  //         soldier: sold._id as unknown as ObjectId,
  //         date_in,
  //         date_out,
  //         pre_diagnosis,
  //         final_diagnosis,
  //         hospital_name,
  //         type_of_disease,
  //         type_of_visit,
  //         complaint,
  //         recomendation,
  //       });
  //       await visit.save();
  //       return res.status(200).send(visit);
  //     } catch (err) {
  //       return res.status(500).send(err);
  //     }
  //   }
});

export { router as visitsRouter };
