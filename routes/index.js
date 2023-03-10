import express from 'express'
let router = express.Router()

import author from './author.route.js'
import comics from './comics.route.js'
import comment from "./coments.route.js"
import company from './company.route.js'
import user from './users.route.js'
import chapters from './chapter.route.js'
import categories from './categories.route.js'
import mercadoPago from './mercadoPago.route.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("minga server ready")
})

router.use('/chapters', chapters)
router.use('/comments', comment)
router.use('/authors', author)
router.use('/users', user)
router.use('/comics', comics)
router.use("/companies", company)
router.use("/categories",categories)
router.use("/auth" , user)
router.use("/donation" , mercadoPago)

export default router