import mongoose, { Schema, model } from 'mongoose';
import Joi from 'joi';

export const SubStructureDataSchema = Joi.object({
  name: Joi.string(),
  soldier_id: Joi.string(),
  status: Joi.string(),
  rank: Joi.string(),
  position: Joi.string(),
  id: Joi.string(),
});

export const SubStructureSchema = Joi.object({
  name: Joi.string(),
  id: Joi.string(),
  data: [SubStructureDataSchema],
  structure: Joi.array()
});

export const StructureSchema = Joi.object({
  name: Joi.string(),
  id: Joi.string(),
  structure: [SubStructureSchema]
});

export const BatStructureSchemaValidate = Joi.object({
  _id: Joi.string(),
  id: Joi.string(),
  union_name: Joi.string(),
  bat_name: Joi.string(),
  vch_name: Joi.string(),
  combat: Joi.object({
    name: Joi.string(),
    rank: Joi.string(),
    soldier_id: Joi.string(),
  }),
  version: Joi.string(),
  structure: [StructureSchema]
});

export interface ICombat {
  name: string;
  rank: string;
  soldier_id?: string;
}

export interface ISubStructureData {
  name: string;
  soldier_id?: string;
  status: string;
  rank: string;
  position: string;
  id: string;
}
export interface ISubStructure {
  name: string;
  id: string;
  data: ISubStructureData[];
  structure: ISubStructure[];
}

export interface IStructure {
  name: string;
  id: string;
  structure: ISubStructure[];
}
export interface IBatStructure {
  _id?: string;
  id: string;
  union_name: string;
  bat_name: string;
  vch_name: string;
  combat: ICombat;
  version: string;
  structure: IStructure[];
}

const structureSchema = new Schema<IBatStructure>({
  _id: mongoose.SchemaTypes.ObjectId,
  id: String,
  union_name: String,
  bat_name: String,
  vch_name: String,
  combat: {
    name: String,
    rank: String,
    soldier_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
  },
  version: String,
  structure: [{
    name: String,
    id: String,
    structure: [{
      name: String,
      id: String,
      data: [{
        name: String,
        soldier_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
        status: String,
        rank: String,
        position: String,
        id: String
      }],
      structure: [{
        name: String,
        id: String,
        data: [{
          name: String,
          soldier_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Soldier' },
          status: String,
          rank: String,
          position: String,
          id: String
        }],
        structure: []
      }]
    }]
  }]
});

export const Structure = model<IBatStructure>('Structure', structureSchema);