import { Comic } from "../models/Comic.js"

const controller ={
read: async(req,res) => { 
    try{let comics = Comic.findById().populate("company_id").populate("author_id")

        if(comics){
        res.status(200).json({
            succes:true,
            response: "sc:200, deleted"
        })}else{
            res.status(404).json({
                succes: false,
                message: "Comic not found."
            })
        }
    }catch(error){
        console.log(error);
    }
    update: async(req,res,next)=>{
        try{
        const { id }= req.params;
        let comic = await Comic.findByIdAndUpdate(
        req.body,
        { new: true });
        res.status(200).json({
            succes:true,
            response: "Updated"
        })
        }catch(error){
            console.log(error);
        }
    }
    destroy: async(req, res) =>{
        try{
            const { id }= req.params;
            await Comic.findByIdAndDelete(
                { _id:id }
    
            )
            res.status(200).json({
                succes:true,
                response: "sc:200, deleted"
            })
        }catch(error){
            console.log(error);
        }
    }
}
}