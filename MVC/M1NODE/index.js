const express=require('express')
const cors =require('cors')
const app=express()
// const student =require('./model/student.model')
const student =require('./model/studentmodel2')
require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(cors())



app.get('/student/search/s' ,async (req,res)=>{
    let search = req.query.name
    // console.log(search);
    
       let data= await student.find(
        {
          $or:[ { name:{
                $regex:search,
                $options:'i'
            }},
            {age:{
                $regex:search,
                $options:"i"
            }}
        ]
        }
       ) 
       res.json(data)
    //    res.send(search)

})





// app.get('/student/search/s' ,async (req,res)=>{
//     let search = req.query.name
//     console.log(search);
    
//       let data =await student.find({
//         $or:[

//             {name:{$regex:search, $options:"i"}},
//             {age:{$regex:search, $options:"i"}},
//             {contact:{$regex:search, $options:"i"}}
//         ]
//       })
//        res.json(data)
//     //    res.send(search)



//     //  let {name}=req.query;
//     // stmodel.find({
//     //     $or: [
//     //    {name : { $regex:name,$options:'i' }},
//     //    {email: { $regex:name,$options:'i' }},
//     //    {connect: { $regex:name,$options:'i' }},
//     //    {city: { $regex:name,$options:'i' }}



       

//     //        ]
       
//     // })
//     // .then((data)=>{
//     //     res.json(data)
//     // })
//     // .catch((err)=>{
//     //     res.json({message:'search error',err})

//     // })


// })


app.post('/student',async (req,res)=>{
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

// app.delete('/student/data',async (req,res)=>{

//     let data =await student.deleteMany({})
//     res.json(data)


// })
app.put('/student/updatemany',async (req,res)=>{

    let data =await student.updateMany({"city":'bhp'},{$set:{'age':18}},{returnDocument:'after'})
    res.json(data)

})
app.put('/student/:id',async (req,res)=>{

    let data =await student.findByIdAndUpdate(req.params.id,req.body,{returnDocument:'after'})
    res.json(data)

})



app.get('/student' ,async (req,res)=>{
       let data= await student.find() 
       res.json({message:"susccessfully",data})
})

// app.get('/student/search/s' ,async (req,res)=>{
//     let search = req.query.name
//     // console.log(search);
    
//        let data= await student.find(
//         {
//             name:{
//                 $regex:search,
//                 $options:'i'
//             }
//         }
//        ) 
//        res.json(data)
//     //    res.send(search)

// })




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
app.delete('/student/:id',async (req,res)=>{
    let data =await student.findByIdAndDelete(req.params.id)
    res.json(data)

})

// delete all


app.listen(5000,()=>{
    console.log("server is running");
    
})