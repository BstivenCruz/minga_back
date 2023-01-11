import controller from "../controllers/chapter.controller.js";
import  express  from "express";
import schema from "../schemas/chapter.schema.js";
import validator from "../middlewares/validator.js";
import orderExists from '../middlewares/orderExist.js';

let router = express.Router();
const {create, get_pages} = controller


router.post('/',validator(schema), orderExists, create)
/* router.get('/:comic_id/:order', get_pages) */ //params
router.get('/', get_pages) //query
export default router; 