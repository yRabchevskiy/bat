import mongoose from "mongoose";
import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE } from "./enum_types/general";

interface IVlc {
  number: string;
  date: string;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
}

interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  summoned?: string;
  summoned_date?: string;
  unit?: string;
}

interface IRank {
  date?: Date;
  type: RANK_TYPES;
}

interface ISoldier {
  full_name: string;
  birthday: Date;
  phone?: string;
  rank: IRank[];
  editional_data: ISoldierEditionalData;
  vlc: IVlc[];
}

interface ISoldierDoc extends mongoose.Document {
  full_name: string;
  birthday: Date;
  phone?: string;
  rank: IRank[];
  editional_data: ISoldierEditionalData;
  vlc: IVlc[];
}

interface ISoldierModel extends mongoose.Model<ISoldierDoc> {
  createObj(attr: ISoldier): ISoldierDoc;
}
const soldierSchema = new mongoose.Schema<ISoldier>({
  full_name: { type: String, require: true },
  birthday: { type: Date, require: true },
  phone: { type: String },
  rank: [
    {
      date: { type: Date },
      type: {
        type: String,
        enum: [
          RANK_TYPES.SOLDIER,
          RANK_TYPES.SENIOR_SOLDIER,
          RANK_TYPES.JUNIOR_SERGEANT,
          RANK_TYPES.SERGEANT,
          RANK_TYPES.SENIOR_SERGEANT,
          RANK_TYPES.MAIN_SERGEANT,
          RANK_TYPES.STAFF_SERGEANT,
          RANK_TYPES.MASTER_SERGEANT,
          RANK_TYPES.SENIOR_MASTER_SERGEANT,
          RANK_TYPES.CHIEF_MASTER_SERGEANT,
          RANK_TYPES.JUNIOR_LIEUTENANT,
          RANK_TYPES.LIEUTENANT,
          RANK_TYPES.SENIOR_LIEUTENANT,
          RANK_TYPES.CAPTAIN,
          RANK_TYPES.MAJOR,
          RANK_TYPES.LIEUTENANT_COLONEL,
          RANK_TYPES.COLONEL,
          RANK_TYPES.BRIGADIER_GENERAL,
          RANK_TYPES.MAJOR_GENERAL,
          RANK_TYPES.LIEUTENANT_GENERAL,
          RANK_TYPES.COLONEL_GENERAL,
          RANK_TYPES.GENERAL,
          RANK_TYPES.UNKNOWN,
        ],
        default: RANK_TYPES.SOLDIER
      },
    },
  ],
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
    sex_type: {
      type: String,
      enum: [SEX_TYPE.MALE, SEX_TYPE.FEMALE],
      default: SEX_TYPE.MALE,
    },
    address: { type: String },
    summoned: { type: String },
    summoned_date: { type: String },
    unit: { type: String },
  },
  vlc: [
    {
      number: { type: String, required: true },
      date: { type: Date, required: true },
      hospital_name: { type: String, required: true },
      diagnosis: { type: String, required: true },
      recomendation: { type: String, required: true },
    }
  ],
});

soldierSchema.statics.createObj = (attr: ISoldier) => new Soldier(attr);

const Soldier = mongoose.model<any, ISoldierModel>("Soldier", soldierSchema);

export { ISoldier, Soldier };
