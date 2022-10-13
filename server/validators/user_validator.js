
const Joi = require('joi');

const user_schema = Joi.object({
    // first_name:Joi.string().min(2).required(),
    // last_name:Joi.string().min(2).required(),
    // username:Joi.string().min(5).required(),
    email:Joi.string().min(6).required(),
    password:Joi.string().min(8).required(),
})

const user_login_schema = Joi.object({
    email:Joi.string().min(6).required(),
    password:Joi.string().min(8).required(),
})

module.exports = {
    user_schema,
    user_login_schema
}

