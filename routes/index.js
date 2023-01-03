import express from 'express';
let router = express.Router();
import user from './users.route.js'
import comment from './coments.router.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',user)
router.use('/comments',comment)

export default  router;
