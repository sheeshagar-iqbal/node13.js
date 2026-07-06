import express, { urlencoded } from 'express'
const app=express() 
import studentrouter from './routes/students.route.js'
import mongodb from './config/mongodbconnecton.js'
import { error } from 'console'
import { MulterError } from 'multer'
import cors from 'cors'
import { fileURLToPath } from "url";
import path from 'path'
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())
// app.use ("/uploads",express.static(path.join(__filename,"upload")))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "upload")));

app.use('/api/student',studentrouter)

app.use((error,req,res,next)=>{
     if (error instanceof MulterError){
        return res.status(400).send(`image error ${error.message} ${error.code}`)
     }else{
        return res.status(500).send(`something went wrong ${error.message}`)
     }
     next()
})
// app.get('/',(req,res)=>{
//     res.send('hi')
// })

mongodb()
app.listen(process.env.port,()=>console.log('server is running'))


