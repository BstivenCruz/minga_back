import express from "express";
let router = express.Router();

//schemas & middlewares
import { schema, deleteChapter } from "../schemas/chapter.schema.js"
import validator from "../middlewares/validator.js";
import orderExists from "../middlewares/orderExist.js";
import passport from "passport"
import isAuthor from "../middlewares/isAuthor.js"
import { isComicAuthor } from "../middlewares/isComicsAuthor.js";




//controller
import chapter_controller from "../controllers/chapter.controller.js";
const { create, get_pages, get_one_chapter, update, destroy } = chapter_controller;
import all_controller from "../controllers/chapter.all.controller.js";
const { get_comics_chapters } = all_controller;
import details_controller from "../controllers/chapter.details.controller.js";
const { get_pages_from_chapter } = details_controller;

router.post("/", passport.authenticate( "jwt" ,{session : false}) ,validator(schema), orderExists, create);
router.get("/", passport.authenticate( "jwt" ,{session : false}) ,get_comics_chapters);
router.get("/:id", passport.authenticate( "jwt" , { sesssion : true}) , get_one_chapter)
router.get("/order", passport.authenticate( "jwt" ,{session : false}) ,get_pages_from_chapter);
router.get("/pages/:_id", passport.authenticate( "jwt" ,{session : false}) ,get_pages);
router.put("/:id",passport.authenticate( "jwt" , {session : false}), update)
router.delete("/:id",  passport.authenticate( "jwt" ,{session : false}) , isAuthor ,  isComicAuthor, validator(deleteChapter) , destroy)

export default router;
