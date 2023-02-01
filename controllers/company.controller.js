import { Company } from '../models/Company.js'

const controller = {

    create : async (req,res, next) => {
        req.body.active = false
        try {
            let company = await Company.create(req.body)
            res.status(201).json({
                succes: true,
                response : company
            })
        } catch (error) {
            next(error)    
        }
    }

}

export default controller