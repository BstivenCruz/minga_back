import {verifyAoC} from "../middlewares/verifyAuthor.js"
import { logSchema } from "../schemas/comics.schema.js"
import validator from "../middlewares/validator.js"
import  express  from "express"
import controller from "../controllers/comicsbyauthandcompany.js"
import authorOrCompany from "../middlewares/authorOrcompany.js"
import passport from "../config/passport.js"

let router= express.Router()


const { read } = controller
router.get("/me",/* passport.authenticate('jwt', {session: false}), */ read)
/* router.put('/:id',validator(logSchema),
authorOrCompany, update)
router.delete('/:id', validator(logSchema),
verifyAoC, destroy) */

export default router