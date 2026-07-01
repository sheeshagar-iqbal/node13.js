const express = require('express')
const app = express()   //initaize

app.get('/',(req,res)=>{
    res.write("<h1>home pages</h1>")
    res.end()
})
app.get('/about',(req,res)=>{
    res.write("<h1>about pages</h1>")
    res.end()
})

app.get("/service",(req,res)=>{
    res.write("<h1>service page<h1/>")
    res.end()
})
app.get("/contact",(req,res)=>{
    res.write(JSON.stringify({name:"mukul","age":23}))
    // res.write(JSON.stringify([23,34,'iqbal']))
    res.end()
})

app.get('/help',(req,res)=>{
        res.send({"name":"mukul","age":23})
})

app.listen(4000, ()=>{
    console.log('server running');
    
})

