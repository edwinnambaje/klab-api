const Joi=require('joi');
const registerSchema = Joi.object().keys({
    username:Joi.string().min(4).required().label("username"),
    email:Joi.string().lowercase().required().label('email'),
    password:Joi.string().min(4).required().label('password'),
    role:Joi.string()
});
const loginSchema = Joi.object().keys({
    email:Joi.string().lowercase().required().label('email'),
    password:Joi.string().required().label('password')
});
module.exports={registerSchema,loginSchema}