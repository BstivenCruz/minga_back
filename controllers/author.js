import {Author} from "../models/Author.js";


const controller = {
    create: async (req, res) => {
        req.body.active = true
        try{
            const {name, last_name, city, country, date, photo, user_id, active} = req.body
            let author = await Author.create({name, last_name, city, country, date, photo, user_id, active})

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