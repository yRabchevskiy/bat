import mongoose, { Schema, model } from 'mongoose';
import { ISoldier, ISoldierEditionalData, ISoldPropertiesData, IVlc } from './interfaceses';
import { IPropertyData } from '../interfaces';

const soldVlcSchema = new Schema<IVlc>({
  vlc_number: { type: String },
  vlc_date: { type: Date },
  hospital_name: { type: String },
  diagnosis: { type: String },
  recomendation: { type: String },
  description: { type: String},
});

const soldEditionalDataSchema = new Schema<ISoldierEditionalData>({
  blood_type: { type: String },
  sex_type: { type: String },
  address: { type: String },
  summoned: {
    value: { type: String },
    date: { type: Date },
  },
  position: { type: String },
  unit: { type: String },
  description: { type: String },
});

const soldPropertiesDataSchema = new Schema<ISoldPropertiesData<IPropertyData>>({});

const soldierSchema = new Schema<ISoldier>({
  _id: mongoose.SchemaTypes.ObjectId,
  name: {
    first_name: { type: String },
    last_name: { type: String },
    middle_name: { type: String },
  },
  birthday: { type: Date },
  phone: { type: String },
  rank: [{
    value: { type: String },
    date: { type: Date }
  }],
  editional_data: soldEditionalDataSchema,
  vlc: [soldVlcSchema],
  properties: soldPropertiesDataSchema,
});




export const Soldier = model<ISoldier>('Soldier', soldierSchema);