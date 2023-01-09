import express from "express";
let router = express.Router();
import authorSchema from "../schemas/author.schema.js";
import controller from "../controllers/Author.js";
import validator from "../middlewares/validator.js";

const { create} = controller;

router.post('/', validator(authorSchema), create)
  
  export default router;
