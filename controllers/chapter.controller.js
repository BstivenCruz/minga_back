import defaultResponse from "../config/response.js"
import { Chapter } from "../models/Chapter.js"

const controller = {

  create: async (req, res, next) => {
    try {
      const { comic_id, title, pages, order } = req.body
      await Chapter.create({ comic_id, title, pages, order })
      res.status(201).json({
        succes: true,
        response: "done",
      })
    } catch (error) {
      next(error)
    }
  },
  get_one_chapter : async (req,res) =>{
    
    const { id } = req.params
    try {
      let chap = await Chapter.findById(id)
      res.status(200).json({
        success: true,
        response: chap
      })
      
    } catch (error) {
      console.log(error)
    }
  },

  get_pages: async (req, res, next) => {
    const { _id } = req.params
    try {
      const comic = await Chapter.findById(_id)
      /* console.log(comic) */
      res.status(200).json({
        success: true,
        response: comic
      })    
    }catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
        const { id } = req.params
       let chapter = await Chapter.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        )
        req.body.success = true 
        req.body.sc = 200
        req.body.data = chapter
        return defaultResponse(req,res)
        }
    catch (err) {
        next(err)
    }
},
destroy: async (req, res, next) => {
    try {
        const { id } = req.params
        await Chapter.findOneAndDelete({ _id: id })
        req.body.success = true 
        req.body.sc = 200
        req.body.data = "destroy"
        return defaultResponse(req,res)
    }
    catch (err) {
        next(err)
    }
}


}

export default controller