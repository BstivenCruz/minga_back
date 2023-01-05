import controller from "../controllers/comics.controller.js";
import comicSchema from '../schemas/comics.schema.js';
import validator from "../middlewares/validator.js";
const {create}=controller
import express from "express";
let router=express.Router()

router.post('/',create)

export default router