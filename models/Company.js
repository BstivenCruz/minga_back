import mongoose from "mongoose";

const company = new mongoose.Schema({
    name : { type: String, require: true},
    logo : {type: String, require: true},
    website : {type: String, require: true},
    description : {type: String, require: true},
    user_id : {type: mongoose.Types.ObjectId, ref: 'id' , require: true}
},{timestamps:true}
)

export const Company = mongoose.model('companys',company)