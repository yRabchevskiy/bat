import Joi from "joi";


export const RemissionSchemaValidate = Joi.object({
  soldier: Joi.string(),
  start_date: Joi.date(),
  end_date: Joi.date(),
  diagnosis: Joi.string(),
  description: Joi.string().allow(''),
});