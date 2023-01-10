import { Comic } from "../models/Comic.js";


const comicsDetails = {
get_comic : async (req,res,next)=>{
    try {
        const {id} = req.params
        let comic = await Comic.findById(id,'-author_id -_id -company_id')
        
        if(comic){
            res.status(200).json({
                success: true,
                response : comic
            }
            )
        } else {
            res.status(200).json({
                success : false,
                response : 'comic not exist'
            })
        }
        
    } catch (error) {
        console.log(error)
        
    }
}
}
export default comicsDetails