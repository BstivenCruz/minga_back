import {verifyAoC} from "../middlewares/verifyAuthor.js"
import { logSchema } from "../schemas/comics.schema.js"
import validator from "../middlewares/validator.js"
import  express  from "express"
import controller from "../controllers/comicsbyauthandcompany.js"
import authorOrCompany from "../middlewares/authorOrcompany.js"

const { create, update, destroy } = controller
let router= express.Router()

router.get('/me', read)
router.put('/:id', /* passport.authenticate('jwt', {session: false}), */ validator(logSchema),
authorOrCompany, update)
router.delete('/:id',/* passport.authenticate('jwt',{session: false}), */ validator(logSchema),
verifyAoC, destroy)

export default router