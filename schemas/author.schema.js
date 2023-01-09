import Joi from "joi-oid"

const authorSchema = Joi.object({
    name : Joi.string().required().min(3).max(30).message({
        "any.required" : "Se requiere completar el campo",
        "string.empty" : "Te falta completar el campo"}),
    last_name : Joi.string().required().min(3).max(30),
    city : Joi.string().required().min(3).max(60).message({
        "any.required" : "Se requiere completar el campo Ciudad",
        "string.empty" : "Te falta completar el campo Ciudad"
    }),
    country : Joi.string().required().min(3).max(60).message({
        "any.required" : "Se requiere completar el campo Country",
        "string.empty" : "Te falta completar el campo Country"
    }),
    date : Joi.date().required(),
    photo : Joi.string().required().uri().message({
        "any.required" : "Se requiere completar el campo Photo",
        "string.empty" : "Te falta completar el campo Photo"
    }),
    user_id : Joi.objectId().required()
});

export default authorSchema


