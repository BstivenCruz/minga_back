import { Comment } from "../models/Comment.js"

const controller = {

  create: async (req, res,next) => {
    try {
      const { chapter_id, text, commentable_id } = req.body
      let comment=await Comment.create( {user_id:req.user.id,chapter_id, text, commentable_id} )
      res.status(201).json({
        succes: true,
        reponse: comment
        
      })
    } catch (error) {
      next(error)
    }
  }

}

export default controller