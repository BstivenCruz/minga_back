import Joi from "joi-oid";

const comicSchema=Joi.object({
    author_id:Joi.objectId().required().messages({
        "any.required":"The field is required",
        "string.empty":"The field Author is empty",
    }),
    company_id:Joi.objectId(),
    title:Joi.string().required().messages({
        "any.required":"The field is required",
        "string.empty":"The field Title is empty",
    }),
    photo:Joi.string().required().messages({
        "any.required":"The field is required",
        "string.empty":"The field Photo is empty",

    }),
    description:Joi.string().required().messages({
        "any.required":"The field is required",
        "string.empty":"The field Description is empty",
    }),
    category:Joi.objectId().required().messages({
        "any.required":"The field is required",
        "string.empty":"The field Category is empty",
    })
})

export default comicSchema;