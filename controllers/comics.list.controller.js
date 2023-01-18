import { Comic } from "../models/Comic.js"

const comicsList={
    get_comics_list: async(req,res,next)=>{
        let filters={}
        let order={
            title: 'asc'
        }
        let pagination={
            page:1,
            limit:10
        }
        if (req.query.title){
            filters.title= {"$regex": req.query.title, $options: 'i'}
        }
        if (req.query.category_id){
            filters.category_id=req.query.category_id.split(',')

        }
        if (req.query.page){
            pagination.page=req.query.page
        }
        try{
            let comics= await Comic.find(filters)
                                    .populate('category_id','_id')
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