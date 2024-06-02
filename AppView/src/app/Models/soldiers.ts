import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE, TYPE_OF_DISEASE, TYPE_OF_VISIT, TYPE_OF_VISIT_STATUS } from './general';

export interface IVlc {
  vlc_number: string;
  vlc_date: Date;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
}

interface IVisitFields {
  date_in?: Date;
  date_out?: Date;
  pre_diagnosis?: string;
  final_diagnosis?: string;
  hospital_name?: string;
  type_of_visit?: TYPE_OF_VISIT;
  type_of_disease?: TYPE_OF_DISEASE;
  complaint?: string;
  recomendation?: string;
  status?: TYPE_OF_VISIT_STATUS;
}

export interface IVisit extends IVisitFields {
  soldier: ISoldier;
}

export interface IVisitPostData extends IVisitFields {
  soldier: string;
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

export interface IRank {
  date?: Date | null;
  type: RANK_TYPES;
}

export interface ISoldier {
  _id?: string;
  full_name: string;
  birthday: Date;
  phone?: string;
  rank: IRank[];
  editional_data: ISoldierEditionalData;
  vlc?: IVlc[];
}
