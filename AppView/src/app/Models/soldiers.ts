import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE, TYPE_OF_DISEASE, TYPE_OF_VISIT, TYPE_OF_VISIT_STATUS } from './general';

export interface IVlc {
  vlc_number: string;
  vlc_date: Date;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
}

export interface IVisit {
  _id?: string;
  soldier: ISoldier;
  date_in?: Date; // дата скерування, госпіталізації
  date_out?: Date; // дата виписки
  pre_diagnosis?: string; // діагноз при направденні
  in_diagnosis?: string; // діагноз при госп
  final_diagnosis?: string; // діагноз заключний
  hospital_name?: string; 
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string; // опис проведеної допомоги
  recomendation?: string;
  status?: TYPE_OF_VISIT_STATUS;
}

export interface IVisitPostData {
  _id?: string;
  soldier_name: string;
  rank?: RANK_TYPES;
  phone?: string;
  date_in?: Date; // дата скерування, госпіталізації
  date_out?: Date; // дата виписки
  pre_diagnosis?: string; // діагноз при направденні
  in_diagnosis?: string; // діагноз при госп
  final_diagnosis?: string; // діагноз заключний
  hospital_name?: string; 
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string; // опис проведеної допомоги
  recomendation?: string;
  status?: TYPE_OF_VISIT_STATUS;
}

export interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  summoned?: string;
  summoned_date?: string;
  position?: string;
  unit?: string;
  description?: string;
}

export interface ISoldier {
  _id?: string;
  full_name: string;
  birthday: Date;
  phone?: string;
  rank: RANK_TYPES;
  editional_data: ISoldierEditionalData;
  vlc?: IVlc[];
}
