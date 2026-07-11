const express =require('express')
const userpost = require('../controller/usercontroller')
const router =express.Router()


router.post('/',userpost)

module.exports =router