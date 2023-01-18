import {Category} from '../models/Category.js'
import defaultResponse from './../config/response.js'

const categoryController={

    get_categories:async(req,res,next) => {
        try{
            let all=await Category.find()
            if(all){
                res.status(200).json({
                    success:true,
                    response:all
                })
            }else{
                req.body.success=false,
                req.body.sc=404,
                req.body.data='not found'
                defaultResponse(req,res)
            }
        }catch(err){
            next(err)
        }
    }
}
export default categoryController;
