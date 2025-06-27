import mongoose, { Schema, model } from 'mongoose';
import { IRemission } from './interface';

const remissionSchema = new Schema<IRemission>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { type: mongoose.SchemaTypes.Mixed }, // { type: mongoose.SchemaTypes.ObjectId | mongoose.SchemaTypes.String, ref: 'Soldier' },
  start_date: { type: Date },
  end_date: { type: Date },
  diagnosis: { type: String },
  description: { type: String },

  rank: { type: String },
  name: { type: String },
  union: { type: String },
});

export const Remission = model<IRemission>('Remission', remissionSchema);