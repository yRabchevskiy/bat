import mongoose, { Schema, model } from 'mongoose';
import { IHospitalization } from './interface';

const hospitalizationSchema = new Schema<IHospitalization>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
  date_in: {type: Date },
  date_out: {type: Date },
  pre_diagnosis: {type: String },
  in_diagnosis: {type: String },
  final_diagnosis: {type: String },
  hospital_name: {type: String },
  type_of_disease: {type: String },
  complaint: {type: String },
  recomendation: {type: String },
});

export const Hospitalization = model<IHospitalization>('Hospitalization', hospitalizationSchema);