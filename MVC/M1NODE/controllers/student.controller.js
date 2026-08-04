const student =require('../model/studentmodel2')

const createstudent =async (req,res)=>{
    let data=  await student.create(req.body)
    res.json(data)
}


const getstudent =async (req,res)=>{
       let data= await student.find() 
       res.json({message:"susccessfully",data})
}

const getbyidstudent =async (req,res)=>{

    let data =await student.findById(req.params.id)
    res.json(data)

}

const deletestudent =async (req,res)=>{
    let data =await student.findByIdAndDelete(req.params.id)
    res.json(data)

}

// const searchstudent= async (req,res)=>{
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

// }


const searchstudent =async (req,res)=>{
    let search = req.query.name
    // console.log(search);
    
       let data= await student.find(
        {
          $or:[ { name:{
                $regex:search,
                $options:'i'
            }},
            {contact:{
                $regex:search,
                $options:"i"
            }},
             {city:{
                $regex:search,
                $options:"i"
            }}
        ]
        }
       ) 
       res.json(data)
    //    res.send(search)

}


const updatebyid=async (req,res)=>{

    let data =await student.findByIdAndUpdate(req.params.id,req.body,{returnDocument:'after'})
    res.json(data)

}
const updatemany =async (req,res)=>{

    let data =await student.updateMany({"city":'bhp'},{$set:{'age':18}},{returnDocument:'after'})
    res.json(data)

}

const sortstudent = async (req,res)=>{
    let sort = req.query.name == 'asc'?1:-1
    console.log(sort);
    let data = await student.find().sort({name:sort})
    res.json(data)
    
}
module.exports ={createstudent,getstudent,getbyidstudent,deletestudent,searchstudent,updatebyid,updatemany, sortstudent}