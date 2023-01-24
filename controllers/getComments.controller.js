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
        try{
            let all=await Comment.find(chapter)
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
            const edit= await Comment.updateOne({_id:editId._id},{$set:{text:'comentario actualizado'}})
            if(edit){
                res.status(200).json({
                    success: true,
                    response: edit,
                    message:'update',
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
//como usuario de la app//quiero ver los comentarios de un capitulo/comic//para comparar opiniones y evaluar si leo el capitulo/comic	
// GET: api/comments?commentable_type={chapter} para ver comentarios de un capitulo	
// por defecto vienen los últimos 5 comentarios, paginar
//por defecto vienen ordenados desde el último hasta el primero

//PUT: api/comments/{id} para editar un comentario de un comic/capitulo	

// DELETE: api/comments/{id} para eliminar un comentario de un comic/capitulo	
// desarrollar un middleware que verifique que el usuario que quiere editar/eliminar es el mismo que creó el comentario
// realizar las validaciones de joi correspondientes, personalizar los mensajes
// no se debe hardcodear ningun dato y el id del autor/editorial debe pasarse con autorización de tipo bearer





