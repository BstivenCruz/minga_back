import author from './author.js';
import users from './users.js'

import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/authors', author)
router.use('/users',users)

export default  router;
