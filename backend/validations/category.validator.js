const Joi = require("joi");

const categoryValidation = Joi.object({
  name: Joi.string().min(3).max(12).required(),
});

module.exports = categoryValidation;
