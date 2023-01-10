import { Chapter } from "../models/Chapter.js";


const controllerDetails = {
        get_comics_chapters: async (req, res, next) => {
        let consulta = {};
        let ordenamiento = {};
        let paginacion = {
            pages: 1,
      limit: 5,
    };
    if (req.query.comic_id) {
        consulta.comic_id = req.query.comic_id;
    }
    if (req.query.page) {
        paginacion.pages = req.query.page;
    }
    if (req.query.limit) {
        paginacion.limit = req.query.limit;
    }
    if (req.query.sort) {
        ordenamiento = { order: req.query.sort };
    }
    try {
        const chapters = await Chapter.find(consulta,'-_id')
        .sort(ordenamiento)
        .skip(
            paginacion.pages > 0 ? (paginacion.pages - 1) * paginacion.limit : 0
            ).limit(paginacion.limit);
            res.status(201).json({
                succes: true,
                response: chapters,
            });
            
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default controllerDetails