import express from 'express'
let router = express.Router()
import companySchema from '../schemas/company.schema.js'
import controller from '../controllers/company.controllers.js'
const  { create } = controller
import validator  from '../middlewares/validator.js'

router.post('/',validator(companySchema),create)  //ruta secundaria

export default router