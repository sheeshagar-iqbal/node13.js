const express = require('express')
const app =express()
const testmodel= require('./models/testrimonaial.model')
const cors=require('cors')
require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.post('/review',async(req,res)=>{
    const data = await testmodel.create(req.body)
    console.log(data);
    
    res.json(data)
})
app.get('/review',async(req,res)=>{
    const data = await testmodel.find()
    // console.log(data);
    
    res.json(data)
})
app.get('/review/case',async(req,res)=>{
    let c = req.query.case
        // console.log(c)
    const data = await testmodel.find({case:c})

        res.json(data)
})

app.get('/review/city',async(req,res)=>{
    let c = req.query.city
        // console.log(c)
    const data = await testmodel.find({city:c})

        res.json(data)
})

app.get('/review/age',async(req,res)=>{
    let c = req.query.age
        // console.log(c)
        let data
        if(c=='0-18'){
             data = await testmodel.find({age:{$gte:0,lte:18}})
             console.log('a');
             
            }
            else if(c=='18-30'){
             data = await testmodel.find({age:{$gte:18,lte:30}})
             console.log('b');

            }
            else if(c=='30-60'){
             data = await testmodel.find({age:{$gte:30,lte:60}})
             console.log('c');
            }
                
                
                
                res.json(data)
})

app.listen(2000, ()=>console.log('server is running'))