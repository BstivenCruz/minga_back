import express from "express";
let router = express.Router();
import companySchema from '../schemas/companies.schema.js'
import  validator  from '../middlewares/validator.js';
import companyIsActive from '../middlewares/companyActive.js'
import controller from '../controllers/company.controller.js'
const { create  } = controller


router.post('/',validator(companySchema),companyIsActive,create)


export  default router