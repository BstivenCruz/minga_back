import defaultResponse from "../config/response.js";
import   {Comment}   from "../models/Comment.js";
import { User } from "../models/User.js"



 const veryfy = async(req,res,next) => {
    let  id  = req.query.id 
    let comment= await Comment.findById(id)
    let user = req.user.id
    let userCommnet = comment.user_id 

    if (user.equals(userCommnet)){
        return next()
    }else{
        res.status(404).json({
            succes: false,
            response: 'not found'
        })
    }
}
export default veryfy