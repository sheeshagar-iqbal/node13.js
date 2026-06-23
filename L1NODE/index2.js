// const express =require('express')
// import express from 'express'\
import express from 'express'
const app= express()



// for use ejs template it is middle wate for template use ejs
app.set('view engine', 'ejs')

// accept json data post method
app.use(express.json())
// accept form data   post method
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('hi')
})

app.get('/user',(req,res)=>{
    res.render('user', {title:'hello body', message:'what are you doing'})
})



app.listen(4000,()=> console.log('server run sucessfully')
)