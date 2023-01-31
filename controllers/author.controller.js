import { firebaserules_v1 } from "googleapis"
import { Author } from "../models/Author.js"

const controller = {

    create: async (req, res, next) => {
        req.body.active = false
        try{
            let author = await Author.create(req.body)
            res.status(201).json({
                success:true,
                response: author
            })
        }catch(error){
            next(error)
        }
    }

}

export default controller