import Joi from "joi";

const type_of_disease = Joi.object().keys({
  type: Joi.string().valid(
    'Захворювання',
    'Травма',
    'Поранення',
    'Каліцтво',
    'Самокаліцтво',
    'Контузія',
    'інше'
  ),
});

export const HospitalizationSchemaValidate = Joi.object({
  _id: Joi.string(),
  soldier: Joi.string().required(),
  date_in: Joi.date().allow(null),
  date_out: Joi.date().allow(null),
  pre_diagnosis: Joi.string().allow(''),
  in_diagnosis: Joi.string().allow(''),
  final_diagnosis: Joi.string().allow(''),
  hospital_name: Joi.string(),
  type_of_disease: type_of_disease,
  complaint: Joi.string().allow(''),
  recomendation: Joi.string().allow(''),
});