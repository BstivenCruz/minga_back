import "dotenv/config.js";
import "../../config/database.js";
import { Comment } from "../comment.js";

let comments = [
  {
    chapter_id: '63acd1e28e7c0313cba77725',
    user_id: '63acd1e28e7c0313cba77725',
    text: "jdkljfdlegkljheglk",
    commentable_id: '63acd1e28e7c0313cba77725' ,
  }
  
];
 Comment.insertMany(comments)