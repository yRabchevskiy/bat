import mongoose, { Schema, model } from 'mongoose';
import { IBatStructure, IPersonnelData, IUnit } from './interfaces';


const PersonnelSchema = new Schema<IPersonnelData>({
  _id: mongoose.SchemaTypes.ObjectId,
  name: String,
  soldier_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
  rank: String,
  position: String,
});

const UnitSchema = new Schema<IUnit>({
  _id: mongoose.SchemaTypes.ObjectId,
  name: String,
  personnel: [PersonnelSchema],
  units: [{}],
});

const structureSchema = new Schema<IBatStructure>({
  _id: mongoose.SchemaTypes.ObjectId,
  union_name: String,
  bat_name: String,
  vch_name: String,
  combat: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
  version: String,
  main_units: [UnitSchema]
});

export const Structure = model<IBatStructure>('Structure', structureSchema);