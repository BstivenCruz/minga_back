import { Company } from '../models/Company.js'
import defaultResponse from '../config/response.js'

/*
- busco por el id de la empresa la empresa
- si existe la empresa
    - si está activa (active=true) dejo pasar
    - si está inactiva (active=false) tiro el error
*/

async function companyIsActive(req,res,next) {
    let { company_id } = req.params //el nombre del params es el de la ruta!!! no olvidar!!!
    let company = await Company.findOne({ _id:company_id })
    if (company) {
        if (company.active) {
            return next() //NO OLVIDAR LOS RETURN DE CADA CONDICION!
        }
        req.body.success = false
        req.body.sc = 400
        req.body.data = 'company is not active'
        return defaultResponse(req,res) //NO OLVIDAR LOS RETURN DE CADA CONDICION!
    }
    req.body.success = false
    req.body.sc = 404
    req.body.data = 'company not found'
    return defaultResponse(req,res) //NO OLVIDAR LOS RETURN DE CADA CONDICION!
}

export default companyIsActive