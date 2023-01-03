import express from 'express';
var router = express.Router();
import user from './users.route.js'
import companies from './companies.route.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',user)
router.use('/companies',companies)

export default  router;
