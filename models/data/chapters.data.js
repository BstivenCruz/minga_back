import "dotenv/config.js";
import "../../config/database.js";
import { Chapter } from "../Chapter.js"; 

let chapters = [
    {
        comic_id: "63acd1e28e7c0313cba77725" ,
        title: "",
        pages: {},
        order: 1
    }
]
Chapter.insertMany(chapters)