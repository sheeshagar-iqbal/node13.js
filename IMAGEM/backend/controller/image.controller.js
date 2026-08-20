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

module.exports={imgUpload}