import controller from "../controllers/chapter.controller.js";
import  express  from "express";
import { Chapter } from "../models/Chapter.js";
let router = express.Router();
const {create} = controller

router.get('/', function(rec, res, next){
    res.json({
        succes: true,
        response: "chapters",
    })
})

router.post('/', create)
router.use('/chapters', Chapter)
export default router; 