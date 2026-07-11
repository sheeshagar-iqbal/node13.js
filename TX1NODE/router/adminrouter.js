const express =require('express')
const adminpost = require('../controller/admincontroller')
const router =express.Router()

router.post('/:id',adminpost)


module.exports =router