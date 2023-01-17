import { Comic } from "../models/Comic.js";
import { User } from '../models/User.js'
import defaultResponse from "../config/response.js";
const controller={
    create:async(req,res,next)=>{
        try{
            const {author_id,company_id, title,photo,description,category}=req.body
            await Comic.create({author_id,company_id, title,photo,description,category})
            res.status(201).json({
                success: true,
                response: 'done',
            })
        }catch(err){
           next(err)
        }
    },
    
}
export default controller