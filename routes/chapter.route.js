import controller from "../controllers/chapter.controller.js";
import  express  from "express";
import schema from "../schemas/chapter.schema.js";
import validator from "../middlewares/validator.js";
let router = express.Router();
const {create} = controller

router.post('/',validator(schema), create)

export default router; 