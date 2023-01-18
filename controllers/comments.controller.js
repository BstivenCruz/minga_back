import { Comment } from "../models/Comment.js"

const controller = {

  create: async (req, res,next) => {
    try {
      let comment = await Comment.create(req.body)
      res.status(201).json({
        succes: true,
        reponse: 'commented: '+comment.text,
      })
    } catch (error) {
      next(error)
    }
  }

}

export default controller