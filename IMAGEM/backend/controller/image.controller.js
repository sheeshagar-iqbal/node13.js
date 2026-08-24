 const imgmodel = require("../model/img.model");


const imgUpload = async (req,res)=>{
    console.log(req.file);
    let data = await imgmodel.create({image:req.file.filename})
    res.json({message:"Image uploaded",file:data})  
}

// const imgUpload = async (req,res)=>{
//     console.log(req.files);
//     let images = req.files.map((e)=>e.filename)
//     console.log(images);
    
//     let data = await imgmodel.create({image:images})
//     res.json({message:"Image uploaded",data})
    
// }


const imgretrive = async (req,res)=>{
    let data = await imgmodel.find()
    res.json({message:"Image retrive",data})  
}




// form 

// const postdata = async (req,res)=>{
//     try {
//           const data =  new imgmodel(req.body)
//           if (req.file){
//             data.image=req.file.filename
//           }
//           await data.save()
//           console.log(data);
          
//           res.json(data)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// }




const postdata = async (req, res) => {
  try {
    const data = await imgmodel.create({
      ...req.body,
      image: req.file ? req.file.filename : ""
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getdata = async (req,res)=>{
    try { 
        const data = await imgmodel.find()
        res.json(data)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
const getsingledata = async (req,res)=>{
    try {
         const data = await imgmodel.findById(req.params.id)
        
         if(!data) return res.status(500).json({message:'user not found'})
          res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
const putdata = async (req,res)=>{
    try {
         const data = await imgmodel.findByIdAndUpdate(req.params.id,req.body,{returnDocument:'after'})
         if(!data) return res.status(404).json({message:'user not found'})

          res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
const deletedata = async (req,res)=>{
    try {
        const data = await imgmodel.findByIdAndDelete(req.params.id)
         if(!data) return res.status(404).json({message:'user not found'})

          res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
module.exports={imgUpload,imgretrive,getdata,getsingledata,postdata,putdata,deletedata}