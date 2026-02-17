import Joi from 'Joi';
import loginSchema from './JoiValidation.js'

const loginSchema = Joi.object({
    username: userFields.username,
    password: userFields.password.required()
});

module.exports = loginSchema;
