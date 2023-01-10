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
    get_comic : async (req,res,next)=>{
        try {
            const {id} = req.params
            let comic = await comics.findById(id)

            if(comic){
                res.status(200).json({
                    success: true,
                    response : comic
                }
                )
            } else {
                res.status(200).json({
                    success : false,
                    response : 'comic not exist'
                })
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }
}
export default controller