import  {Comic}  from "../models/Comic.js";
async function validatorTitle (req,res,next){
    const comic=await Comic.findOne({title:req.body.title});
    if(comic){
        return res.status(400).json({
            success: false,
            response: 'the comic already exist'
        })
    }
    return  next()
}
export default validatorTitle