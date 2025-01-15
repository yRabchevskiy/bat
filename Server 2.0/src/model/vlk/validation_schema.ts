import Joi from "joi";


export const VlkSchemaValidate = Joi.object({
  soldier: Joi.string(),
});