import controller from "../controllers/comics.controller.js";
import comicSchema from '../schemas/comics.schema.js';
import validator from "../middlewares/validator.js";
const {create}=controller

import express from "express";
let router=express.Router()
import validatorTitle from "../middlewares/validatorTitle.js";
import comicsList from '../controllers/comics.list.controller.js'
const {get_comic}=comicsList

router.post('/',validator(comicSchema),validatorTitle,create)
router.get('/',get_comic)

export default router