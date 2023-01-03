import {Author} from "../models/Author.js";


const controller = {
    create: async (req, res) => {
        try{
            const {name, city, country, user_id, active} = req.body
            let author = await Author.create({name, city, country, user_id, active})

            res.status(201).json({
                success:true,
                response: 'done',
                new_author: author})
        }catch(error){
            console.log(error)
        }
    }
}

export default controller