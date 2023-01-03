import Joi from "joi-oid"

const authorSchema = Joi.object({
    name : Joi.string().required().min(1).max(200).message({"any.required" : "Se requiere texto"}),
    city : Joi.string().required().min(1).max(200).message({'any.required': 'Debe poner una Ciudad'}),
    country : Joi.string().required().min(1).max(200).message({'any.required': 'Debe poner un Pais'}),
    user_id : Joi.objectId().required(),
    active : Joi.boolean().required()
});

export default authorSchema


