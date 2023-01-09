import { Company } from '../models/Company.js'


const controller = {
    create : async (req,res,) => {
        try {
            const { name,logo,website,description,user_id} = req.body
            await Company.create({name,logo,website,description,user_id})
            res.status(201).json({
                succes: true,
                response : "Your company was created :) "
            })
        } catch (error) {
            console.log(error)    
        }
    }
}

export default controller