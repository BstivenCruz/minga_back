import  express  from "express"
let router = express.Router()
import passport from "passport"
//schemas & middlewares
import schema from "../schemas/chapter.schema.js"
import validator from "../middlewares/validator.js"
import orderExists from '../middlewares/orderExist.js'
import isAdmin from "../middlewares/isAdmin.js"
import authorActive from "../middlewares/authorActive.js"
//controller
import chapter_controller from "../controllers/chapter.controller.js"
const { create,get_pages } = chapter_controller
import all_controller from '../controllers/chapter.all.controller.js'
const { get_comics_chapters } = all_controller
import details_controller from '../controllers/chapter.details.controller.js'
import isAuthor from "../middlewares/isAuthor.js"
const { get_pages_from_chapter } = details_controller

router.post('/',passport.authenticate("jwt",{session:false}),isAuthor,isAdmin,authorActive,validator(schema), orderExists, create)
router.get('/',passport.authenticate("jwt",{session:false}), get_comics_chapters)
router.get('/order',passport.authenticate("jwt",{session:false}), get_pages_from_chapter)
router.get('/pages/:_id',passport.authenticate("jwt",{session:false}), get_pages)

export default router
