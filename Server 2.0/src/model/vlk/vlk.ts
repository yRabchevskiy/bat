import mongoose, { Schema, model } from "mongoose";
import { IVlk } from "./interface";

const vlkSchema = new Schema<IVlk>({
  _id: mongoose.SchemaTypes.ObjectId,
  soldier: { type: mongoose.SchemaTypes.Mixed },
  name: { type: String },
  rank: { type: String },
  position: { type: String },
  address: { type: String },
  union: { type: String },
  birthday: { type: String },
  vlk_result: { type: String },
  vlk_number: { type: String },
  vlk_date: { type: String },
  vlk_institution: { type: String },
  diagnosis: { type: String },
});

export const Vlk = model<IVlk>("Vlk", vlkSchema);
