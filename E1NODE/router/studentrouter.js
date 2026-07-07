const express = require('express')
const router =express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>student page</h1>')
})

router.post('/data',(req,res)=>{
    res.send(req.body)
})

router.get('/contact/:number',(req,res)=>{
    res.send(req.params)
})

module.exports =router