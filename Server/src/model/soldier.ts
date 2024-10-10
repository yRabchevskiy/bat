import mongoose, { Schema, model } from 'mongoose';
import Joi from 'joi';
import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE } from './interfaces';
import { ranks } from './general';


const blood_types = Joi.object().keys({
  type: Joi.string().valid(
    '0(-)',
    '0(+)',
    'A(-)',
    'A(+)',
    'B(-)',
    'B(+)',
    'AB(-)',
    'AB(+)',
    'Невідома'
  ),
});

const sex_types = Joi.object().keys({
  type: Joi.string().valid(
    'Чоловіча',
    'Жіноча',
    'Невідома'
  ),
});


const soldEditionalDataValidate = Joi.object({
  blood_type: blood_types,
  sex_type: sex_types,
  address: Joi.string(),
  summoned: Joi.string(),
  summoned_date: Joi.string(),
  position: Joi.string(),
  unit: Joi.string(),
  description: Joi.string(),
});

const soldVlcValidate = Joi.object({
  blood_type: blood_types,
  sex_type: sex_types,
  address: Joi.string(),
  summoned: Joi.string(),
  summoned_date: Joi.string(),
  position: Joi.string(),
  unit: Joi.string(),
  description: Joi.string(),
});

export const SoldierSchemaValidate = Joi.object({
  _id: Joi.string(),
  full_name: Joi.string().required(),
  birthday: Joi.date(),
  phone: Joi.string(),
  rank: ranks,
  editional_data: soldEditionalDataValidate,
  vlc: Joi.array().items(soldVlcValidate),
});

export interface IVlc {
  vlc_number: string;
  vlc_date: Date;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
}

export interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  summoned?: string;
  summoned_date?: string;
  position?: string;
  unit?: string;
  description?: string;
}

export interface ISoldier {
  _id?: string;
  full_name: string;
  birthday: Date;
  phone?: string;
  rank: RANK_TYPES,
  editional_data: ISoldierEditionalData;
  vlc?: IVlc[];
}

const soldVlcSchema = new Schema<IVlc>({
  vlc_number: { type: String },
  vlc_date: { type: Date },
  hospital_name: { type: String },
  diagnosis: { type: String },
  recomendation: { type: String },
});

const soldEditionalDataSchema = new Schema<ISoldierEditionalData>({
  blood_type: { type: String },
  sex_type: { type: String },
  address: { type: String },
  summoned: { type: String },
  summoned_date: { type: String },
  position: { type: String },
  unit: { type: String },
  description: { type: String },
});

const soldierSchema = new Schema<ISoldier>({
  _id: mongoose.SchemaTypes.ObjectId,
  full_name: { type: String },
  birthday: { type: Date },
  phone: { type: String },
  rank: { type: String },
  editional_data: soldEditionalDataSchema,
  vlc: [soldVlcSchema],
});




export const Soldier = model<ISoldier>('Soldier', soldierSchema);