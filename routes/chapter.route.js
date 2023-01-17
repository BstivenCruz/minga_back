import  express  from "express";
let router = express.Router();
import controller from "../controllers/chapter.controller.js";
import schema from "../schemas/chapter.schema.js";
import validator from "../middlewares/validator.js";
import orderExists from '../middlewares/orderExist.js';
import controllerDetails from '../controllers/chapter.details.controller.js'
const { get_comics_chapters} = controllerDetails

const {create } = controller

router.post('/',validator(schema), orderExists, create)
router.get('/',get_comics_chapters)

export default router; 