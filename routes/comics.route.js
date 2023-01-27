import express from "express"
let router=express.Router()

//schemas & middlewares
import {comicSchema,logSchema} from '../schemas/comics.schema.js'
import validatorTitle from "../middlewares/validatorTitle.js"
import validator from "../middlewares/validator.js"
import passport from "passport"
import verifyAoC from "../middlewares/verifyAuthor.js"

import isAuthor from "../middlewares/isAuthor.js"
import isAdmin from "../middlewares/isAdmin.js"
import authorActive from "../middlewares/authorActive.js"

//controller
import controller from "../controllers/comics.controller.js"
const { create, update, destroy } = controller
import comicsDetails from '../controllers/comics.details.controller.js'
const { get_comic } = comicsDetails
import comicsList from "../controllers/comics.list.controller.js"

const { get_comics_list } = comicsList
import controller2 from "../controllers/comicsbyauthandcompany.js"
const { read, updated, destroyed } = controller2

//endpoints
router.get("/me",passport.authenticate('jwt', {session: false}), read)
router.post('/',passport.authenticate("jwt",{session:false}),isAuthor,authorActive, isAdmin ,validator(comicSchema),validatorTitle,create)
router.get('/',get_comics_list)
router.get('/:id',get_comic)
router.put('/:id',passport.authenticate('jwt', {session: false}), updated)
router.delete('/:id',passport.authenticate('jwt', {session: false}), validator(logSchema),verifyAoC, destroyed)


export default router