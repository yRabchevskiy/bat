import mongoose, { Schema, model } from 'mongoose';
import { IVlk } from './interface';

const vlkSchema = new Schema<IVlk>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
});

export const Vlk = model<IVlk>('Vlk', vlkSchema);