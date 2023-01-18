import express from "express"
let router = express.Router()

//schemas & middlewares
import schema from "../schemas/comment.schema.js"
import validator from "../middlewares/validator.js"

//controller
import controller from "../controllers/comments.controller.js"
const { create } = controller

//endpoints
router.post("/", validator(schema), create)

export default router
