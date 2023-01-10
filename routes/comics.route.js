import controller from "../controllers/comics.controller.js";
import comicSchema from '../schemas/comics.schema.js';
import validator from "../middlewares/validator.js";
const {create, get_comic}=controller
import express from "express";
let router=express.Router()
import validatorTitle from "../middlewares/validatorTitle.js";

router.post('/',validator(comicSchema),validatorTitle,create)
router.get('/:id',get_comic)

export default router