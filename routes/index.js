import express from 'express';
var router = express.Router();
import user from './users.route.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',user)

export default  router;
