import mongoose from "mongoose";
import {
  BLOOD_TYPES,
  RANK_TYPES,
  SEX_TYPE,
  TYPE_OF_DISEASE,
} from "./enum_types/general";

interface IVisit {
  date_in?: Date;
  date_out?: Date;
  pre_diagnosis?: string;
  final_diagnosis?: string;
  hospital_name?: string;
  recomendation?: string;
  is_hospitalization: boolean;
  type_of_disease: TYPE_OF_DISEASE;
}

interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  rank: RANK_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  phone?: string;
  summoned?: string;
  summoned_date?: string;
  unit?: string;
}
interface ISoldier {
  full_name: string;
  birthday: Date;
  editional_data: ISoldierEditionalData;
  visits: IVisit[];
}

interface ISoldierDoc extends mongoose.Document {
  full_name: string;
  birthday: Date;
  editional_data: ISoldierEditionalData;
  visits: IVisit[];
}

interface ISoldierModel extends mongoose.Model<ISoldierDoc> {
  createObj(attr: ISoldier): ISoldierDoc;
}
const soldierSchema = new mongoose.Schema<ISoldier>({
  full_name: { type: String, require: true },
  birthday: { type: Date, require: true },
  editional_data: {
    blood_type: {
      type: String,
      enum: [
        BLOOD_TYPES.O_NEGATIVE,
        BLOOD_TYPES.O_POSITIVE,
        BLOOD_TYPES.A_NEGATIVE,
        BLOOD_TYPES.A_POSITIVE,
        BLOOD_TYPES.B_NEGATIVE,
        BLOOD_TYPES.B_POSITIVE,
        BLOOD_TYPES.AB_NEGATIVE,
        BLOOD_TYPES.AB_POSITIVE,
        BLOOD_TYPES.UNKNOWN,
      ],
      default: BLOOD_TYPES.UNKNOWN,
    },
    rank: { type: String, require: true },
    sex_type: {
      type: String,
      enum: [SEX_TYPE.MALE, SEX_TYPE.FEMALE],
      default: SEX_TYPE.MALE,
    },
    address: { type: String },
    phone: { type: String },
    summoned: { type: String },
    summoned_date: { type: String },
    unit: { type: String },
  },
  visits: [
    {
      date_in: { type: Date },
      date_out: { type: Date },
      pre_diagnosis: { type: String },
      final_diagnosis: { type: String },
      hospital_name: { type: String },
      recomendation: { type: String },
      is_hospitalization: { type: Boolean, required: true, default: false },
      type_of_disease: {
        type: String,
        enum: [
          TYPE_OF_DISEASE.DISEASE,
          TYPE_OF_DISEASE.TRAUMA,
          TYPE_OF_DISEASE.WOUND,
          TYPE_OF_DISEASE.MUTILATION,
          TYPE_OF_DISEASE.SELF_MUTILATION,
          TYPE_OF_DISEASE.CONTUSION
        ],
        default: TYPE_OF_DISEASE.DISEASE,
      },
    },
  ],
});

soldierSchema.statics.createObj = (attr: ISoldier) => new Soldier(attr);

const Soldier = mongoose.model<any, ISoldierModel>("Soldier", soldierSchema);

export { IVisit, ISoldier, Soldier };
