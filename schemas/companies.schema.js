import Joi from "joi-oid";

const companySchema = Joi.object(
    {
    name: Joi.string().required(),
    logo: Joi.string().required().uri(),
    website : Joi.string().required().uri(),
    description : Joi.string().required(),
    user_id : Joi.objectId().required()
    }
)

export default companySchema