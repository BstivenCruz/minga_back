// import mongoose from 'mongoose'

// // const options = {
// //     useUnifiedTopology: true,
// //     useNewUrlParser: true
// // }

// mongoose.set('strictQuery', false)
// mongoose.connect(process.env.MONGO_URI,options) //MONGO_URI es la uri de conexión
//     .then(() => console.log('database connected'))
//     .catch(err => console.log(err))

import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI) //MONGO_URI es la uri de conexión
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))