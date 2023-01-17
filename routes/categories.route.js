import categoryController from '../controllers/categories.controller.js';
import express from "express";
const {get_categories}=categoryController
let router=express.Router()

router.get('/',get_categories)


export default router