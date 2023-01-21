import defaultResponse from "../config/response.js"
import { Comic } from "../models/Comic.js";


async function authorOrCompany(req,res,next){
    if(req.user.is_company || req.user.is_author){
        return next ()} 
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not allowed'
    return defaultResponse(req,res)
}
export default authorOrCompany