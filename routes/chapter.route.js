import  express  from "express";
import controller from "../controllers/chapter.controller.js";
import schema from "../schemas/chapter.schema.js";
import validator from "../middlewares/validator.js";
import orderExists from '../middlewares/orderExist.js';
import details from '../controllers/chapter.details.controller.js'

let router = express.Router();
const {create, get_pages} = controller
console.log(details);

router.post('/',validator(schema), orderExists, create)
router.get('/order', details.get_comics_order )
router.get('/pages/:_id', get_pages) //query
router.get('/', details.get_comics_chapters)
/* router.get('/:comic_id/:order', get_pages) */ //params
export default router; 