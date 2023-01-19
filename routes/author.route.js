import express from "express"
let router = express.Router()

//schemas & middlewares
import authorSchema from "../schemas/author.schema.js"
import validator from "../middlewares/validator.js"
import authorActive from "../middlewares/authorActive.js"
import passport from "passport"
import isAuthor from "../middlewares/isAuthor.js"


//controller
import controller from "../controllers/author.controller.js"
const { create } = controller

//endpoints
router.post('/',passport.authenticate("jwt",{session:false}), isAuthor,authorActive, validator(authorSchema),authorActive, create)
  
export default router