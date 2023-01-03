import "dotenv/config.js";
import "../../config/database.js";
import { Chapter } from "../Chapter.js"; 

let chapters = [
    {
        comic_id:[],
        title: "",
        pages: [],
        order: []
    }
]
Chapter.insertMany(chapters)