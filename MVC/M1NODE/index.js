const express=require('express')
const cors =require('cors')
const app=express()
// const student =require('./model/student.model')
const student =require('./model/studentmodel2')
const stdrouter = require('./rounter/student.router')
require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(cors())

app.use('/',stdrouter)


// async function insert() {
//    let  d=await student.create({
//         name:"code",
//         age:12,
//         city:"bhopal"

//     })

//     console.log("inserted");
    
    
// }
// app.post('/student', insert())

// app.delete('/student/data',async (req,res)=>{

//     let data =await student.deleteMany({})
//     res.json(data)


// })

//  by id
// app.delete('/student/:id',async (req,res)=>{

//     let data =await student.deleteOne({_id:req.params.id})
//     res.json(data)

// })

// by name
// app.delete('/student/:id',async (req,res)=>{

//     // let data =await student.deleteOne({name:req.params.id})
//     res.json(data)

// })

app.listen(5000,()=>{
    console.log("server is running");
    
})