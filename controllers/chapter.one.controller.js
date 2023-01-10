import { Chapter } from "../models/Chapter";

const controller = {
    read: async(req, res, next)=> {
        try{
           const {comic_id, title, pages, order} = req.body 
            await Chapter.read({comic_id, title, pages, order})
            res.status(201).json({
                succes: true,
                response: "done"
            })
        }catch(error){
           next(error)
        }
    },

}
export default controller;