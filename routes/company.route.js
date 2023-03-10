import express from "express"
let router = express.Router()

//schemas & middlewares
import companySchema from '../schemas/companies.schema.js'
import  validator  from '../middlewares/validator.js'
import companyIsActive from '../middlewares/companyActive.js'
import passport from "passport"

//controller
import controller from '../controllers/company.controller.js'
const { create  } = controller

//endpoints
router.post('/',passport.authenticate("jwt",{session:false}), validator(companySchema),companyIsActive,create)

export  default router