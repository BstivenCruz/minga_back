import express from "express"
let router = express.Router()

//schemas & middlewares
import authorSchema from "../schemas/author.schema.js"
import validator from "../middlewares/validator.js"
import authorActive from "../middlewares/authorActive.js"

//controller
import controller from "../controllers/author.controller.js"
const { create } = controller

//endpoints
router.post('/', validator(authorSchema),authorActive, create)
  
export default router