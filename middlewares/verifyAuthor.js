import defaultResponse from "../config/response.js";
import { Comic } from "../models/Comic.js";
import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";


 const verifyAoC = async(req,res,next) => {
    let user = req.user.id
    /* console.log(user) */
    let { id } = req.params 
    
    let  comic = await Comic.findById(id).populate("company_id").populate("author_id")
    let author_user_id = comic.author_id?.user_id 
    console.log(comic.author_id)
    let company_user_id = comic.company_id?.user_id

    if (user.equals(author_user_id) || user.equals(company_user_id) ){

        return next()
    }else{
        res.status(404).json({
            succes: false,
            response: 'not found'
        })
    }
}
export default verifyAoC
