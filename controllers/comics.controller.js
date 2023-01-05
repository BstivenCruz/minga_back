import { Comic } from "../models/Comic.js";
import { User } from '../models/User.js'
import defaultResponse from "../config/response.js";
const controller={
    create:async(req,res,next)=>{
        try{
            const {author_id,company_id, title,photo,description,category}=req.body
            let comic= await Comic.create({author_id,company_id, title,photo,description,category})
            defaultResponse(req,res)
        }catch(err){
           next(err)
        }
    },
}
export default controller