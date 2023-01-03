import 'dotenv/config.js'
import '../../config/database.js'
import { Author } from '../Author.js'


let authors = [
    {
        name: "Pepa",
        city: "Buenos Aires",
        country: "Argentina",
        user_id: "63acd1e28e7c0313cba77725",
        active : true
    },{
        name: "Pepe",
        city: "San Juan",
        country: "Argentina",
        user_id: "63acd1e28e7c0313cba77725",
        active : true
    },{
        name: "Pepi",
        city: "Neuquen",
        country: "Argentina",
        user_id: "63acd1e28e7c0313cba77725",
        active : false
    },{
        name: "Pepo",
        city: "La Pampa",
        country: "Argentina",
        user_id: "63acd1e28e7c0313cba77725",
        active : true
    }
]

Author.insertMany(authors)