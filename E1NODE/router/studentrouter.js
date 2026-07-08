const express = require('express')
const controller = require('../controller/studentcontroller')
const {studentget, studentpost} =controller
const router =express.Router()

router.get('/',studentget)

router.post('/data',studentpost)

router.get('/contact/:number',(req,res)=>{
    res.send(req.params)
})

module.exports =router