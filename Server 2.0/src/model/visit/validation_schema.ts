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

const type_of_visit = Joi.object().keys({
  type: Joi.string().valid(
    'Амбулаторний',
    'Госпіталізація',
    'Обстеження',
    'інше'
  ),
});

const type_of_visit_status = Joi.object().keys({
  type: Joi.string().valid(
    'Активний',
    'Очікування',
    'Завершений'
  ),
});

export const VisitSchemaValidate = Joi.object({
  _id: Joi.string(),
  soldier_name: Joi.string().required(),
  phone: Joi.string(),
  date_in: Joi.date(),
  date_out: Joi.date(),
  pre_diagnosis: Joi.string(),
  in_diagnosis: Joi.string(),
  final_diagnosis: Joi.string(),
  hospital_name: Joi.string(),
  type_of_visit: type_of_visit,
  type_of_disease: type_of_disease,
  complaint: Joi.string(),
  recomendation: Joi.string(),
  status: type_of_visit_status,
});