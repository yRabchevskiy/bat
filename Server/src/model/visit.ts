import mongoose, { Schema, model } from 'mongoose';
import Joi from 'joi';
import { RANK_TYPES, TYPE_OF_DISEASE, TYPE_OF_VISIT, TYPE_OF_VISIT_STATUS } from './interfaces';
import { ranks } from './general';

const type_of_disease = Joi.object().keys({
  type: Joi.string().valid(
    'Захворювання',
    'Травма',
    'Поранення',
    'Каліцтво',
    'Самокаліцтво',
    'Контузія',
    'інше'
  ),
});

const type_of_visit = Joi.object().keys({
  type: Joi.string().valid(
    'Амбулаторний',
    'Госпіталізація',
    'Обстеження',
    'інше'
  ),
});

const type_of_visit_status = Joi.object().keys({
  type: Joi.string().valid(
    'Активний',
    'Очікування',
    'Завершений'
  ),
});

export const VisitSchemaValidate = Joi.object({
  _id: Joi.string(),
  soldier_name: Joi.string().required(),
  rank: ranks,
  phone: Joi.string(),
  date_in: Joi.date(),
  date_out: Joi.date(),
  pre_diagnosis: Joi.string(),
  in_diagnosis: Joi.string(),
  final_diagnosis: Joi.string(),
  hospital_name: Joi.string(),
  type_of_visit: type_of_visit,
  type_of_disease: type_of_disease,
  complaint: Joi.string(),
  recomendation: Joi.string(),
  status: type_of_visit_status,
});

export interface IVisit {
  _id?: string;
  soldier: any; // ISoldier;
  rank?: RANK_TYPES,
  date_in?: Date; // дата скерування, госпіталізації
  date_out?: Date; // дата виписки
  pre_diagnosis?: string; // діагноз при направденні
  in_diagnosis?: string; // діагноз при госп
  final_diagnosis?: string; // діагноз заключний
  hospital_name?: string;
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string; // опис проведеної допомоги
  recomendation?: string;
  status?: TYPE_OF_VISIT_STATUS;
}


const visitSchema = new Schema<IVisit>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { any: {} },
  rank: { type: String },
  date_in: {type: Date },
  date_out: {type: Date },
  pre_diagnosis: {type: String },
  in_diagnosis: {type: String },
  final_diagnosis: {type: String },
  hospital_name: {type: String },
  type_of_visit: {type: String },
  type_of_disease: {type: String },
  complaint: {type: String },
  recomendation: {type: String },
  status: {type: String },
});

export const Visit = model<IVisit>('Visits', visitSchema );