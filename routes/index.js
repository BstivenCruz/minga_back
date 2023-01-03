import express from 'express';
var router = express.Router();
import user from './users.route.js'
import chapter from './chapter.route.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { 
    succes: true,
    response: "chapters",
  });
});

router.use('/auth',user)
router.use('/chapters', chapter)
export default  router;
