import express from "express"
let router = express.Router()

//schemas & middlewares
import schema from "../schemas/comment.schema.js"
import validator from "../middlewares/validator.js"
import passport from "passport"


//controller
import controller from "../controllers/comments.controller.js"
const { create } = controller
import comments from "../controllers/getComments.controller.js"
const {get_comments,delete_comment,edit_comment}=comments;



//endpoints
router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), create)
router.get("/",get_comments)
router.delete('/',delete_comment)
router.put('/',edit_comment)
export default router
