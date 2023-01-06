import comics from './comics.route.js'
import user from './users.route.js'
import express from 'express';
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.status(201).json({
    succces:true,
    response:'done',
    response:'hola'
})
});

router.use('/auth',user)
router.use('/comics',comics)
export default  router;
