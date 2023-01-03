import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    detail: { type: String, require: true },
  },
  { timestamps: true }
);

export const Category = mongoose.model('categories',categorySchema)
