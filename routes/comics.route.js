import express from "express"
let router=express.Router()

//schemas & middlewares
import {comicSchema,logSchema} from '../schemas/comics.schema.js'
import validatorTitle from "../middlewares/validatorTitle.js"
import validator from "../middlewares/validator.js"
import passport from "passport"

//controller
import controller from "../controllers/comics.controller.js"
const { create, update, destroy } = controller
import comicsDetails from '../controllers/comics.details.controller.js'
const { get_comic } = comicsDetails
import comicsList from "../controllers/comics.list.controller.js"
import authorOrCompany from "../middlewares/authorOrcompany.js"
const { get_comics_list } = comicsList
import controller2 from "../controllers/comicsbyauthandcompany.js"
const { read } = controller2

//endpoints
router.get("/me",passport.authenticate('jwt', {session: false}), read)
router.post('/',/* passport.authenticate("jwt",{session:false}), *//* isAuthor,authorActive, isAdmin */ validator(comicSchema),validatorTitle,create)
router.get('/',/* passport.authenticate("jwt",{session:false}), */get_comics_list)
router.get('/:id',/* passport.authenticate("jwt",{session:false}), */get_comic)




export default router