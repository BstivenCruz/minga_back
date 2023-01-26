import express from "express"
let router=express.Router()

//schemas & middlewares
import comicSchema from '../schemas/comics.schema.js'
import validatorTitle from "../middlewares/validatorTitle.js"
import validator from "../middlewares/validator.js"
import isAuthor from "../middlewares/isAuthor.js"
import isAdmin from "../middlewares/isAdmin.js"
import authorActive from "../middlewares/authorActive.js"
import passport from "passport"
//controller
import controller from "../controllers/comics.controller.js"
const { create } = controller
import comicsDetails from '../controllers/comics.details.controller.js'
const { get_comic } = comicsDetails
import comicsList from "../controllers/comics.list.controller.js"
const { get_comics_list } = comicsList

//endpoints
router.post('/',passport.authenticate("jwt",{session:false}),isAuthor,authorActive, isAdmin ,validator(comicSchema),validatorTitle,create)
router.get('/',get_comics_list)
router.get('/:id',get_comic)

export default router