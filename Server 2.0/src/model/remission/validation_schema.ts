import Joi from "joi";


export const RemissionSchemaValidate = Joi.object({
  soldier_id: Joi.string().allow(''),
  rank: Joi.string().allow(''),
  name: Joi.string(),
  union: Joi.string().allow(''),
  start_date: Joi.date(),
  end_date: Joi.date(),
  diagnosis: Joi.string().allow(''),
  description: Joi.string().allow(''),
});