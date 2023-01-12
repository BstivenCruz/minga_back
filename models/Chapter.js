import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
  {
    comic_id: { type: mongoose.Types.ObjectId, ref: 'comics' , require: true },
    title: { type: String, require: true },
    pages: {type: Array, require: true},
    order: {type: Number, require: false},
  },
  { timestamps: true }
);

export const Chapter = mongoose.model('chapters',chapterSchema)

