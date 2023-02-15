const Joi=require('joi');
const blogSchema = Joi.object().keys({
    title:Joi.string().min(5).required(),
    desc:Joi.string().required().label("desc")
})
module.exports={blogSchema}