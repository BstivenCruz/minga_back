import  express  from "express"
let router = express.Router()

//schemas & middlewares
import schema from "../schemas/chapter.schema.js"
import validator from "../middlewares/validator.js"
import orderExists from '../middlewares/orderExist.js'

//controller
import chapter_controller from "../controllers/chapter.controller.js"
const { create,get_pages } = chapter_controller
import all_controller from '../controllers/chapter.all.controller.js'
const { get_comics_chapters } = all_controller
import details_controller from '../controllers/chapter.details.controller.js'
const { get_pages_from_chapter } = details_controller

router.post('/',validator(schema), orderExists, create)
router.get('/', get_comics_chapters)
router.get('/order', get_pages_from_chapter)
router.get('/pages/:_id', get_pages)

export default router