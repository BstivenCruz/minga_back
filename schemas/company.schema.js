import Joi from "joi-oid"

const companySchema = Joi.object({
    name: Joi.string().required().min(1).max(200).message({"any.required" : "obligatorio este campo"}),
    logo: Joi.string().required().uri().message({"any.required" : "obligatorio este campo"}),
    website:Joi.string().required().uri().message({"any.required" : "obligatorio este campo"}),
    description:Joi.string().required().min(1).max(200).message({"any.required" : "obligatorio este campo"}),
    user_id: Joi.objectId().required(),
    active: Joi.boolean().required()
})

export default companySchema