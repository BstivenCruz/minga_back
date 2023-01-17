import { errorHandler } from "../middlewares/errorHandler.js";
import { Comic } from "../models/Comic.js";

const comicsDetails = {
  get_comic: async (req, res, next) => {
    try {
      const { id } = req.params;
      let comic = await Comic.findById(id ,  "-createdAt -updatedAt -__v")
        .populate({
          path: "author_id",
          select: "name  -_id",
        }).populate({
            path: "company_id",
            select: "name  -_id",
          })
      if (comic) {
        res.status(200).json({
          success: true,
          response: comic,
        });
      } else {
        res.status(404).json({
          success: false,
          response: "comic not exist",
        });
      }
    } catch (error) {
      console.log(error);
      errorHandler(error);
      next();
    }
  },
};
export default comicsDetails;