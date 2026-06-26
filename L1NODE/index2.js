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

//  for static file
app.use (express.static('public'))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('hi')
})

app.get('/user',(req,res)=>{
    const user= [
    {
        "name":"iqbal",
        "age":23
    },{
        "name":"khan",
        "age":23
    },{
        "name":"sheeshgar",
        "age":23
    }

]
const items =['apple','banana','orange','mango']
    res.render('user', {title:'hello body', message:'what are you doing',items,user})
})



app.get('/form',(req,res)=>{
    res.render('form',{messsage:null})
})

app.post('/submit',(req,res)=>{
    // res.render('form')
    const data= req.body.myname
    const messsage= `${data} your form submitted`
    // res.send(data)
    res.render('form',{messsage:messsage})
})


app.listen(4000,()=> console.log('server run sucessfully')
)