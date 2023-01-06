import Joi from "joi-oid"
const schema = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).message({
        "any.required":"El campo es requerido, por favor ingresalo!",
        "string.empty":"No pusiste nada en el campo nombre, por favor completalo!",
        "string.min":"Minimo 1 caracter",
        "string.max":"Maximo 200 caracteres"
}),
    pages: Joi.array().required(),
    order: Joi.number()
})
export default schema