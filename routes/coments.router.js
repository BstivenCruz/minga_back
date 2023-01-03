import express from "express";
let router = express.Router();
import schema from "../schemas/comment.schema.js";
import validator from "../middlewares/validator.js";
import controller from "../controllers/comments.controller.js";
const { create } = controller;

router.post("/", validator(schema), create);

export default router;
