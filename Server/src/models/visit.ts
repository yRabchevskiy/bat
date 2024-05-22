import mongoose from "mongoose";
import { TYPE_OF_DISEASE, TYPE_OF_VISIT } from "./enum_types/general";

interface IVisit {
  date_in?: Date;
  date_out?: Date;
  pre_diagnosis?: string;
  final_diagnosis?: string;
  hospital_name?: string;
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string;
  recomendation?: string;
}

interface IVisitDoc extends mongoose.Document {
  date_in?: Date;
  date_out?: Date;
  pre_diagnosis?: string;
  final_diagnosis?: string;
  hospital_name?: string;
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string;
  recomendation?: string;
}

interface IVisitModel extends mongoose.Model<IVisitDoc> {
  createObj(attr: IVisit): IVisitDoc;
}
const visitSchema = new mongoose.Schema<IVisit>({
  date_in: { type: Date },
  date_out: { type: Date },
  pre_diagnosis: { type: String },
  final_diagnosis: { type: String },
  hospital_name: { type: String },
  type_of_visit: {
    type: String,
    enum: [TYPE_OF_VISIT.AMBULATORY, TYPE_OF_VISIT.HOSPITALIZATION, TYPE_OF_VISIT.EXAMINATION],
    default: TYPE_OF_VISIT.AMBULATORY,
  },
  type_of_disease: {
    type: String,
    enum: [
      TYPE_OF_DISEASE.DISEASE,
      TYPE_OF_DISEASE.TRAUMA,
      TYPE_OF_DISEASE.WOUND,
      TYPE_OF_DISEASE.MUTILATION,
      TYPE_OF_DISEASE.SELF_MUTILATION,
      TYPE_OF_DISEASE.CONTUSION,
    ],
    default: TYPE_OF_DISEASE.DISEASE,
  },
  complaint: { type: String },
  recomendation: { type: String },
});

visitSchema.statics.createObj = (attr: IVisit) => new Visit(attr);

const Visit = mongoose.model<any, IVisitModel>("Visits", visitSchema);

export { IVisit, Visit };
