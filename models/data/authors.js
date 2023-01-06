import 'dotenv/config.js'
import '../../config/database.js'
import { Author } from '../Author.js'


let authors = [

    {
        name: "Pepa",
        las_name: "Lora",
        city: "Buenos Aires",
        country: "Argentina",
        date: 11/01/2021,
        photo: "",
        user_id: "63acd1e28e7c0313cba77725",
        active : true
    },{
        name: "Pepe",
        last_name: "Lore",
        city: "San Juan",
        country: "Argentina",
        date: 25/01/2021,
        photo: "",
        user_id: "63acd1e28e7c0313cba77725",
        active : true
    },{
        name: "Pepi",
        last_name: "Lori",
        city: "Neuquen",
        country: "Argentina",
        date: 24/12/2021,
        photo: "",
        user_id: "63acd1e28e7c0313cba77725",
        active : false
    },{
        name: "Pepo",
        last_name: "Loro",
        city: "La Pampa",
        country: "Argentina",
        date: 04/10/2021,
        photo: "",
        user_id: "63acd1e28e7c0313cba77725",
        active : true
    }
]

Author.insertMany(authors)