import 'dotenv/config.js';
import '../../config/database.js';
import { Comic } from '../Comic.js';

let comics=[
    {
        author_id:"63acd1e28e7c0313cba77725",
        company_id:"63acd1e28e7c0313cba77725",
        title:"title1",
        photo:"urlPhoto1",
        description:"description1",
        category:"63acd1e28e7c0313cba77725"
    },
    {
        author_id:"63acd1e28e7c0313cba77725",
        company_id:"63acd1e28e7c0313cba77725",
        title:"title2",
        photo:"urlPhoto2",
        description:"description2",
        category:"63acd1e28e7c0313cba77725"
    },
    {
        author_id:"63acd1e28e7c0313cba77725",
        company_id:"63acd1e28e7c0313cba77725",
        title:"title3",
        photo:"urlPhoto3",
        description:"description3",
        category:"63acd1e28e7c0313cba77725"
    },
    {
        author_id:"63acd1e28e7c0313cba77725",
        company_id:"63acd1e28e7c0313cba77725",
        title:"title4",
        photo:"urlPhoto4",
        description:"description4",
        category:"63acd1e28e7c0313cba77725"
    },
    
]
Comic.insertMany(comics)