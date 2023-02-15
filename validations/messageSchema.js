const Joi=require('joi');

const messageValidate = Joi.object().keys({
    username:Joi.string().min(5).required(),
    email:Joi.string().lowercase().required(),
    message:Joi.string().required()
});
module.exports={messageValidate};