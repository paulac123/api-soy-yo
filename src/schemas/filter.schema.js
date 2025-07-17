const Joi = require("joi");

const filterSchema = Joi.object({
  startId: Joi.number().integer().min(1).required(),
  endId: Joi.number().integer().max(20).required(),
});
//filterSchema.validate()
module.exports = filterSchema;
