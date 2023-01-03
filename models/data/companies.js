import 'dotenv/config.js'
import '../../config/database.js'   //configuracion bases de datos
import { Company } from '../Company.js'

let company = [{
        name: "empresa",
        logo: "logo url",
        website: "linkEmpresa",
        description: "resumen de las actividades de la editorial",
        user_id: "63acd1e28e7c0313cba77725", //id del usuario que creó esa company
        active: true
},{
        name: "empresa dos",
        logo: "logo url dos",
        website: "linkEmpresa dos",
        description: "resumen de las actividades de la editorial",
        user_id: "63acd1e28e7c0313cba77725",
        active: true
}, {
    name: "empresa tres",
    logo: "logo url tres",
    website: "linkEmpresa tres",
    description: "resumen de las actividades de la editorial",
    user_id: "63acd1e28e7c0313cba77725",
    active: true
}, {
    name: "empresa cuatro",
    logo: "logo url cuatro",
    website: "linkEmpresa cuatro",
    description: "resumen de las actividades de la editorial",
    user_id: "63acd1e28e7c0313cba77725",
    active: true
}

]

Company.insertMany(company)