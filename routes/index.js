import author from './author.js';
import comics from './comics.route.js'
import users from './users.js'
import comment from "./coments.router.js";
import company from './company.router.js'

import express from 'express';
let router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/authors', author)
router.use('/users',users)
router.use('/comics',comics)
router.use("/comments", comment);
router.use("/companies", company)

export default router;
