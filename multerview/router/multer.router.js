const express =require('express')
const { postfile } = require('../controller/multer.controller')
const upload = require('../middleware/multer')
const multer =require("multer")
const router = express.Router()
router.post("/multer",upload.single("image"),postfile)

router.use((err,req,res,next)=>{
    if(err instanceof multer.MulterError ){
        return res.status(400).send(`multer error ${err.message}`)
    }else if(err){
        return res.status(400).send(`something went wrong ${err.message}`)
    }
    next()
})
module.exports=router