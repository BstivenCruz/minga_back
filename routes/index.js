import express from 'express';
let router = express.Router();
import user from './users.route.js'
import chapters from './chapter.route.js'
import comment from './coments.router.js'
import orderExists from '../middlewares/orderExist.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("minga server ready")
});

router.use('/auth',user)
router.use('/chapters',orderExists , chapters)
router.use('/comments',comment)

export default  router;
