import { Comic } from "../models/Comic.js";

const comicLogged = {
    get_logged_comics:async(req,res,next) => {
        try{
            const { id } = req.params;
            let comic = await Comic.findById(id, )
            .populate("author_id" , "name -_id")
            .populate("company_id" , "name -_id")
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
        next(error);
    }
  }
}
export default comicLogged
