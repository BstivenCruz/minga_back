import express from "express";
let router=express.Router()
import comicSchema from '../schemas/comics.schema.js';
import validatorTitle from "../middlewares/validatorTitle.js";
import validator from "../middlewares/validator.js";
import controller from "../controllers/comics.controller.js";
const {create }=controller
import comicsDetails from '../controllers/comics.details.controller.js'
const {get_comic} = comicsDetails

router.post('/',validator(comicSchema),validatorTitle,create)
router.get('/:id',get_comic)

export default router