import express from "express"
let router = express.Router()

//controller
import categoryController from '../controllers/categories.controller.js'
const { get_categories } = categoryController

//endpoints
router.get('/',get_categories)

export default router