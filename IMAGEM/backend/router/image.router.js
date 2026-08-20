const express = require('express')
const upload = require('../config/multer')
const { imgUpload } = require('../controller/image.controller')
const router = express.Router()

router.post ('/imgupload',upload.single("image"),imgUpload)
// router.post ('/imgupload',upload.array("image"),imgUpload)

module.exports=router