import Joi from "joi-oid";

const comicSchema=Joi.object({
    author_id:Joi.objectId().required().messages({
        "any.required":"the field is required"
    }),
    company_id:Joi.objectId(),
    title:Joi.string().required().messages({
        "any.required":"the field is required"
    }),
    photo:Joi.string().required().messages({
        "any.required":"the field is required"
    }),
    description:Joi.string().required().messages({
        "any.required":"the field is required"
    }),
    category:Joi.objectId().required().messages({
        "any.required":"the field is required"
    })
})

export default comicSchema;