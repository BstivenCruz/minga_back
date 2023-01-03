import { Comment } from "../models/comment.js";

const controller = {
  create: async (req, res,) => {
    try {
      let comments = await Comment.create(req.body);
      res.status(201).json({
        succes: true,
        reponse: "Se creo nuevo comentario",
        commentary: comments,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default controller