import  express  from "express";
import passport from "passport";
import order from "../controllers/mercadopago.controller.js"

const router = express.Router()
 router.post("/",passport.authenticate('jwt', { session:false }), order) 

 export default router;
