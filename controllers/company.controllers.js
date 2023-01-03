import  { Company}   from '../models/Company.js'

const controller = {
    create: async (req,res) => {
        try{
            const { name,logo,website,description,user_id,active } = req.body
            await Company.create({name,logo,website,description,user_id,active})

            res.status(201).json({
                success: true,
                response: "company create"
            })

        }catch(error){
            console.log(error)
        }
    }
}

export default controller