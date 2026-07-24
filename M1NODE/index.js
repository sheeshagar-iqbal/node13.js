const express=require('express')

const app=express()
const student =require('./model/student.model')
require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended:false}))







app.post('/student', async (req,res)=>{
    let data=  await student.create(req.body)
    res.json(data)
})


async function insert() {
   let  d=await student.create({
        name:"code",
        age:12,
        city:"bhopal"

    })

    console.log("inserted");
    
    
}
// app.post('/student', insert())


app.get('/student' ,async (req,res)=>{
       let data= await student.find()
       res.json({message:"susccessfully",data})
})

app.get('/student/:id',async (req,res)=>{

    let data =await student.findById(req.params.id)
    res.json(data)

})
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

// by id
// app.delete('/student/:id',async (req,res)=>{
//     let data =await student.findByIdAndDelete(req.params.id)
//     res.json(data)

// })

// delete all
app.delete('/student/data',async (req,res)=>{

    let data =await student.deleteMany({})
    res.json(data)

})

app.listen(5000,()=>{
    console.log("server is running");
    
})