import express, { urlencoded } from 'express'
const app=express() 
import studentrouter from './routes/students.route.js'
import mongodb from './config/mongodbconnecton.js'


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/student',studentrouter)

// app.get('/',(req,res)=>{
//     res.send('hi')
// })

mongodb()
app.listen(process.env.port,()=>console.log('server is running'))


