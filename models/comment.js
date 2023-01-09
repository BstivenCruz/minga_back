import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    chapter_id: { type: mongoose.Types.ObjectId, ref: "comments", require: true },
    user_id: { type: mongoose.Types.ObjectId, ref: "comments", require: true },
    text: { type: String, require: true },
    commentable_id: {type: mongoose.Types.ObjectId,ref: "comments",require: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model('comments',schema)

