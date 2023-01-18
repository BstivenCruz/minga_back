import { Chapter } from "../models/Chapter.js"

const details_controller = {

  get_pages_from_chapter: async(req,res,next)=>{
    let query = {};
    let order = { order: "asc" }
    if (req.query.comic_id) {
      query.comic_id = req.query.comic_id;
    }
    try {
        console.log(query);
      const chapters = await Chapter.find(query)
        .sort(order)
      res.status(201).json({
        succes: true,
        response: chapters,
      });
    } catch (error) {
      console.log(error);
    }
  }

}

export default details_controller
