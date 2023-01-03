import mongoose from "mongoose"; //esquema o plantilla de mi objeto

const companySchema = new mongoose.Schema({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    website: {type: String, required: true},
    description: {type: String, required: true},
    user_id: {type: mongoose.Types.ObjectId, ref:'company',required: true},
    active: {type: Boolean, required: true},
}, {timestamps:true})

export const Company = mongoose.model('companies', companySchema)