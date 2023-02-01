import { Comment } from "../models/Comment.js";

const comments ={
    get_comments: async (req,res,next) => {
        let  chapter={};
        let pagination = {
            page: 1,
            limit: 5,
        };
        let order={
            createdAt:'desc',
        };
        if(req.query.commentable_type){
            chapter.chapter_id=req.query.commentable_type;
        };
        if (req.query.page){
            pagination.page=req.query.page
        }
        try{
            let all=await Comment.find(chapter)
                                 .populate("user_id",['mail','photo','is_author','_id'])
                                 .skip( pagination.page > 0 ? ( ( pagination.page - 1 ) * pagination.limit ) : 0 )
                                 .limit(pagination.limit)
                                 .sort(order)
            if(all){
                res.status(200).json({
                    success: true,
                    response: all,
                });
            }else{
                res.status(404).json({
                    success:false,
                    response:'comment not found'
                });
            };
        }
        catch(err){
            next(err)
        };
    },
    delete_comment:async(req,res,next)=>{
        const id={};
        if(req.query.id){
            id._id=req.query.id;
        };
        try{
            const comment= await Comment.deleteOne(id);
            if(comment){
                res.status(200).json({
                    success: true,
                    response: comment,
                    message:'The comment has been deleted',
                });
            }else{
                res.status(404).json({
                    success:false,
                    response:'no se elimino',
                });
            };
        }
        catch(err){
            next(err);
        }
    },
    edit_comment: async (req,res,next)=>{
        const editId={};
        if(req.query.id){
            editId._id=req.query.id;
        };
        try{
            const {text}=req.body
            const edit= await Comment.updateOne({_id:editId._id},{$set:{text:text}})
            if(edit){
                res.status(200).json({
                    success: true,
                    message:'update comment',
                });
            }else{
                res.status(404).json({
                    success:false,
                    response:'no se elimino',
                });
            };
        }
        catch(err){
            next(err)
        }
    }
};
export default comments;






