import {Category} from '../models/Category.js'
import { notFoundHandler } from '../middlewares/notFoundHandler.js'
const categoryController={
    get_categories:async(req,res)=>{
        try{
            let all=await Category.find()
            console.log(all)
            if(all){
                res.status(200).json({
                    success:true,
                    response:all
                })
            }else{
                req.body.success=false,
                req.body.sc=404,
                req.body.data='not found'
                notFoundHandler(req,res)
            }
        }catch(err){
            next(err)
        }
    }
}
export default categoryController;