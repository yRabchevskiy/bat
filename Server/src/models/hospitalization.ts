// import mongoose, { Schema } from "mongoose";
// import { ISoldier } from "./soldier";
// import { TYPE_OF_DISEASE, TYPE_OF_VISIT } from "./enum_types/general";

// interface IHospitalizationPostData {
//   soldier_name: string;
//   date_in: Date;
//   date_out: Date;
//   pre_diagnosis: string;
//   final_diagnosis: string;
//   hospital_name: string;
//   type_of_disease: TYPE_OF_DISEASE,
//   complaint: string,
//   recomendation: string,
// }

// interface IHospitalization {
//   soldier: ISoldier;
//   date_in: Date;
//   date_out: Date;
//   pre_diagnosis: string;
//   final_diagnosis: string;
//   hospital_name: string;
//   type_of_visit: TYPE_OF_VISIT,
//   type_of_disease: TYPE_OF_DISEASE,
//   complaint: string,
//   recomendation: string,
// }

// interface IHospitalizationDoc extends mongoose.Document {
//   soldier: ISoldier;
//   date_in: Date;
//   date_out: Date;
//   pre_diagnosis: string;
//   final_diagnosis: string;
//   hospital_name: string;
//   type_of_visit: TYPE_OF_VISIT,
//   type_of_disease: TYPE_OF_DISEASE,
//   complaint: string,
//   recomendation: string,
// }

// interface IHospitalizationModel extends mongoose.Model<IHospitalizationDoc> {
//   createObj(attr: IHospitalization): IHospitalizationDoc;
// }
// const hospitalizationSchema = new mongoose.Schema<IHospitalization>({
//   soldier: {
//     type: Schema.Types.ObjectId,
//     ref: 'Soldier'
//   },
//   date_in: { type: Date },
//   date_out: { type: Date },
//   pre_diagnosis: { type: String },
//   final_diagnosis: { type: String },
//   hospital_name: { type: String },
//   type_of_visit: { type: String, enum: [TYPE_OF_VISIT.HOSPITALIZATION], default: TYPE_OF_VISIT.HOSPITALIZATION },
//   type_of_disease: {
//     type: String,
//     enum: [
//       TYPE_OF_DISEASE.DISEASE,
//       TYPE_OF_DISEASE.TRAUMA,
//       TYPE_OF_DISEASE.WOUND,
//       TYPE_OF_DISEASE.MUTILATION,
//       TYPE_OF_DISEASE.SELF_MUTILATION,
//       TYPE_OF_DISEASE.CONTUSION,
//     ],
//     default: TYPE_OF_DISEASE.DISEASE,
//   },
//   complaint: { type: String },
//   recomendation: { type: String },
// });

// hospitalizationSchema.statics.createObj = (attr: IHospitalization) => new Hospitalization(attr);

// const Hospitalization = mongoose.model<any, IHospitalizationModel>("Hospitalization", hospitalizationSchema);

// export { IHospitalization, IHospitalizationPostData, Hospitalization };
