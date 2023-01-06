import { Author } from '../models/Author.js' //busco el modelo
import defaultResponse from '../config/response.js' //importo la respuesta estandarizada


async function authorActive(req,res,next) { //requiere como parámetros los requerimientos, la respuesta y el next
    let { author_id } = req.params
    let author = await Author.findOne({ _id:author_id })
    if (author) {
        if (author.active) {
            return next() //continuo con el middleware o metodo programado en la ruta
        }
        req.body.success = false //agrego al body la propiedad success en false
        req.body.sc = 400 //agrego al body la propiedad sc (status code) en 400
        req.body.data = 'author is not active' //agrego al body la propiedad data con la cadena de texto correspondiente
        return defaultResponse(req,res)
    }
    req.body.success = false //agrego al body la propiedad success en false
    req.body.sc = 404 //agrego al body la propiedad sc (status code) en 404
    req.body.data = 'author not found' //agrego al body la propiedad data con la cadena de texto correspondiente
    return defaultResponse(req,res)
}

export default authorActive








// async function authorActive(req, res, next) { //requerimientos, respuesta y next 
//     try{
//         const author = await Author.findById(req.params.author_id);
//         if (author.active) {
        
//             return next()// continuo con el middleware o metodo programado en la ruta
//         }
//         req.body.success = false// agrego al body la propiedaas success en false 
//         req.body.sc = 400
//         req.body.data = 'Author is not active'
//         return defaultResponse(req,res)

//     } catch(error){
//         req.body.success = false
//         req.body.sc = 500
//         req.body.data = 'error!'
//         return defaultResponse(req,res)
//     }

// }

// export default authorActive