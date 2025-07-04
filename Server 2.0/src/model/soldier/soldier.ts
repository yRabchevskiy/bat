import mongoose, { Schema, model } from 'mongoose';
import { ISoldier, ISoldierEditionalData, ISoldierProperties, IVlc } from './interfaceses';

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
    organization: { type: String },
    date: { type: Date },
  },
  position: { type: String },
  unit: { type: String },
  description: { type: String },
});

const soldPropertiesDataSchema = new Schema<ISoldierProperties>({
  med_properties: [{
    value: { type: String },
    date: { type: Date },
    description: { type: String } 
  }]
});

const soldierSchema = new Schema<ISoldier>({
  _id: mongoose.SchemaTypes.ObjectId,
  name: { type: String },
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