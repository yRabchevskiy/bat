import mongoose, { Schema, model } from 'mongoose';
import { IBatStructure } from './interfaces';

const structureSchema = new Schema<IBatStructure>({
  _id: mongoose.SchemaTypes.ObjectId,
  union_name: String,
  bat_name: String,
  vch_name: String,
  combat: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
  version: String,
  main_units: [{
    _id: mongoose.SchemaTypes.ObjectId,
    name: String,
    personnel: [{
      name: String,
      id: String,
      soldier_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
      status: String,
      rank: String,
      position: String,
    }],
    units: [{
      _id: mongoose.SchemaTypes.ObjectId,
      name: String,
      personnel: [{
        name: String,
        id: String,
        soldier_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
        status: String,
        rank: String,
        position: String,
      }],
      units: [],
    }]
  }]
});

export const Structure = model<IBatStructure>('Structure', structureSchema);