import { TYPE_OF_DISEASE, TYPE_OF_VISIT } from './general';

export interface IVisit {
  date_in?: Date;
  date_out?: Date;
  pre_diagnosis?: string;
  final_diagnosis?: string;
  hospital_name?: string;
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string;
  recomendation?: string;
}
