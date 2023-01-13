import { Comic } from "../models/Comic.js";

const comicsList={
    get_comic: async(req,res,next)=>{
        let filters={}
        let order={
            title: '1'
        }
        let pagination={
            page:1,
            limit:10,
        }
        if (req.query.title){
            filters.title= {"$regex": req.query.title, $options: 'i'}
        }
        if (req.query.category){
            filters.category=req.query.category
        }
        if (req.query.page){
            pagination.page=req.query.page
        }
        console.log(req.query)
        try{
            let comics= await Comic.find(filters)
                                    .sort(order)
                                    .skip( pagination.page > 0 ? ( ( pagination.page - 1 ) * pagination.limit ) : 0 )
                                    .limit(pagination.limit)
            res.status(200).json({
                success: true,
                response: comics
            })
        }catch(err){
            next(err)
        }
    }
    
}
export default comicsList