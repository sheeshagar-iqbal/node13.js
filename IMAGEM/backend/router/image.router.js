const express = require('express')
const upload = require('../config/multer')
const { imgUpload, imgretrive, postdata, getdata, getsingledata, putdata, deletedata } = require('../controller/image.controller')
const router = express.Router()

router.post ('/imgupload',upload.single("image"),imgUpload)
// router.post ('/imgupload',upload.array("image"),imgUpload)

router.get ('/imgupload',imgretrive)


// form

router.post("/",upload.single("image"),postdata)
router.get("/",getdata)
router.get("/:id",getsingledata)
router.put("/:id",upload.single("image"),putdata)
router.delete("/:id",deletedata)
module.exports=router