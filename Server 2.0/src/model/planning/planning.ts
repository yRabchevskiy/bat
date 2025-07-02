import mongoose, { Schema, model } from "mongoose";
import { IPlanning } from "./interface";

const planningSchema = new Schema<IPlanning>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { type: mongoose.SchemaTypes.Mixed }, // { type: mongoose.SchemaTypes.ObjectId | mongoose.SchemaTypes.String, ref: 'Soldier' },
  type: { type: String },
  planning_date: { type: Date },
  description: { type: String },

  rank: { type: String },
  name: { type: String },
  union: { type: String },
});

export const Planning = model<IPlanning>("Planning", planningSchema);
