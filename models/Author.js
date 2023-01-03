import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name : {type: String, required: true},
    city : {type: String},
    country : {type: String},
    user_id : { type: mongoose.Types.ObjectId, ref:'author', required: true},
    active : {type: Boolean, required: true}
},{timestamps: true});

export const Author = mongoose.model('authors', authorSchema)