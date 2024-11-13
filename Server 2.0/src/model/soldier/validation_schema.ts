import Joi from "joi";
import { ranks } from "../general";

const blood_types = Joi.object().keys({
  type: Joi.string().valid(
    '0(-)',
    '0(+)',
    'A(-)',
    'A(+)',
    'B(-)',
    'B(+)',
    'AB(-)',
    'AB(+)',
    'Невідома'
  ),
});

const sex_types = Joi.object().keys({
  type: Joi.string().valid(
    'Чоловіча',
    'Жіноча',
    'Невідома'
  ),
});

const soldNameValidate = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  middle_name: Joi.string(),
});

const soldRankValidate = Joi.object().keys({
  value: ranks,
  date: Joi.date(),
});

const soldSummomedValidate = Joi.object().keys({
  organization: Joi.string(),
  date: Joi.date(),
});

const soldEditionalDataValidate = Joi.object({
  blood_type: blood_types,
  sex_type: sex_types,
  address: Joi.string(),
  summoned: soldSummomedValidate,
  position: Joi.string(),
  unit: Joi.string(),
  description: Joi.string(),
});

const soldVlcValidate = Joi.object({
  vlc_number: Joi.string(),
  vlc_date: Joi.string(),
  hospital_name: Joi.string(),
  diagnosis: Joi.string(),
  recomendation: Joi.string(),
  description: Joi.string(),
});

const soldPropertyValidation = Joi.object({
  value: Joi.string(),
  date: Joi.date(),
  description: Joi.string(),
});
const soldPropertiesValidate = Joi.object({
  med_properties: [soldPropertyValidation]
});
export const SoldierSchemaValidate = Joi.object({
  _id: Joi.string(),
  name: soldNameValidate,
  birthday: Joi.date(),
  phone: Joi.string(),
  rank: [soldRankValidate],
  editional_data: soldEditionalDataValidate,
  vlc: [soldVlcValidate],
  properties: Joi.object(),
});