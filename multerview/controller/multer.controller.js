const modelmulter= require("../model/multer.model")

const postfile=async (req,res)=>{
    console.log(req.file);
    if(!req.file){
        res.send("upload the image")
    }
    data= await modelmulter.create({...req.body,image:req.file.originalname})
    res.json(data)
}

module.exports={postfile}