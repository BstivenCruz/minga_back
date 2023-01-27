import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    chapter_id: { type: mongoose.Types.ObjectId, ref: "chapters", required: true },
    text: { type: String, require: true },
    commentable_id: {type: mongoose.Types.ObjectId,ref: "comments",required: false},
    user_id: {type: mongoose.Types.ObjectId,ref: 'users' , required: true}
  },
  { timestamps: true }
);

export const Comment = mongoose.model('comments',schema)

