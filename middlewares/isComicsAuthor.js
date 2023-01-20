import { Comic } from "../models/Comic.js"
import { Author } from "../models/Author.js" 

export const isComicAuthor = async (req, res, next) => {
    const h = req.user.id
    
    const { comic_id} = req.body
    const p = 12
    console.log( h )
    console.log(p)
    console.log(comic_id)




    if (comic && author) {
        if (comic.authors.includes(author._id)) {
            next()

        } else {
            res.status(403).json({ message: 'Not the comic author' })
        }
    }
}