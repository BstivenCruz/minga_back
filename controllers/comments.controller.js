import { Comment } from "../models/comment.js";

const controller = {
  create: async (req, res,) => {
    try {
      let comments = await Comment.create(req.body);
      res.status(201).json({
        succes: true,
        reponse: "Se creo nuevo comentario :)",
        commentary: comments.text,
      });
    } catch (error) {
      res.status(400).json({
        succes: false,
        reponse: "disculpa hubo un error"
      })
    }
  },
};

export default controller