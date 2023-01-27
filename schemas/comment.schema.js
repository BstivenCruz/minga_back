import Joi from "joi-oid"

const schema = Joi.object(
  {
    chapter_id: Joi.objectId().required(),
    user_id: Joi.objectId(),
    text: Joi.string().required().min(1).max(200).message({
        "any.require" : "este campo es necesario",
        " string.min" : "agrega minimo un caracter",
        " string.max" : "agrega maximo 200 un caracter",
        " string.empty" : "aun no agregate tu comentario",
        " string.base" : "hola"
    }),
    commentable_id: Joi.objectId(),
    })
;

export default schema