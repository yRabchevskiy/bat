import mongoose, { Schema, model } from 'mongoose';
import { IVisit } from './interfaces';

const visitSchema = new Schema<IVisit>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
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