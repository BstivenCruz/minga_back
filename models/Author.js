import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name : {type: String, required: true},
    last_name : {type: String, required: false},
    city : {type: String, required: true},
    country : {type: String, required: true},
    date: {type: Date, requiered: false},
    photo: {type: String, required: true},
    user_id : { type: mongoose.Types.ObjectId, ref:'author', required: true},
    active : {type: Boolean, required: true}
},{timestamps: true});

export const Author = mongoose.model('authors', authorSchema)