const multer = require("multer")

const filefilter= (req,file,cb)=>{
    if(file.mimetype.startsWith("application/")){
        cb(null,true)
    }else{
       cb(new Error("file type is another, i accept image"),false)
    }
}

const storage=multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null, 'upload')
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
})

const upload=multer({
    storage,
    limits:{
        fileSize:1024*1024*5
    },
    // fileFilter:filefilter
})
module.exports=upload