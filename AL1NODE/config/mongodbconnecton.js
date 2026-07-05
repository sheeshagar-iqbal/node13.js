import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const mongodb=()=>mongoose.connect(process.env.mongourl)
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log(err))

export default mongodb