import express from 'express';
let router = express.Router();
import user from './users.route.js'
import chapter from './chapter.route.js'
import comment from './coments.router.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { 
    succes: true,
    response: "chapters",
  });
});

router.use('/auth',user)
router.use('/chapters', chapter)
router.use('/comments',comment)

export default  router;
