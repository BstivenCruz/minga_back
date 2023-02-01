import express from "express"
let router = express.Router()

//schemas & middlewares
import schema from "../schemas/comment.schema.js"
import validator from "../middlewares/validator.js"
import passport from "passport"
import verify from "../middlewares/commentsDelete.js"

//controller
import controller from "../controllers/comments.controller.js"
const { create } = controller
import comments from "../controllers/getComments.controller.js"
const {get_comments,delete_comment,edit_comment}=comments;





//endpoints
router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), create)
router.get("/",get_comments)
router.delete('/',passport.authenticate("jwt",{session:false}), /* verify, */ delete_comment)
router.put('/',passport.authenticate("jwt",{session:false}), /* verify, */edit_comment)
export default router
