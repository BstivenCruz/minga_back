import { Chapter } from "../models/Chapter.js"

const controllerDetails = {
  get_comics_chapters: async (req, res, next) => {
    let consult = {}
    let order = { order: "asc" }
    let pagination = {
      pages: 1,
      limit: 5,
    }
    if (req.query.comic_id) {
      consult.comic_id = req.query.comic_id
    }
    if (req.query.page) {
      pagination.pages = req.query.page
    }
    if (req.query.limit) {
      pagination.limit = req.query.limit
    }
    if (req.query.sort) {
      order = { order: req.query.sort }
    }
    try {
      const chapters = await Chapter.find(consult)
        .sort(order)
        .skip(
          pagination.pages > 0 ? (pagination.pages - 1) * pagination.limit : 0
        )
        .limit(pagination.limit)
      res.status(201).json({
        succes: true,
        response: chapters,
      })
    } catch (error) {
      next(error)
    }
  },
}

export default controllerDetails
