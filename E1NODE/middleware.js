const express =require('express')
const studentrouter = require('./router/studentrouter')
const adminrouter = require('./router/adminrouter')
const app =express()

app.use(express.json())

app.use('/student', studentrouter)
app.use('/admin',adminrouter)

// app.get('/',(req,res,next)=>{
//     console.log('mid 1');
//     // res.send('home page')
//     next()
// },
// (req,res,next)=>{
//     console.log('home page');
//     // res.send("<h1>home page </h1>")
//     next()
    
// },
// (req,res)=>{
//     res.send('<h1>hello</h1>')
// })


// app.get('/login/:id',(req,res,next)=>{
//     const login =JSON.parse(req.params.id)
//     console.log (typeof(login), login);
    
    
//     if(login){
//         console.log('login checked...');
//         next()
//     }else{
//         res.send('login first')
//     }
// },

// (req,res)=>{
//     res.send('welcome to dashboard')
// })

// app.post('/login',(req,res,next)=>{
//     const login =(req.body.login)
// // console.log(req.body);

//     console.log (typeof(login), login);
    
    
//     if(login){
//         console.log('login checked...');
//         next()
//     }else{
//         res.send('login first')
//     }
// },

// (req,res)=>{
//     res.send('welcome to dashboard')
// })




app.listen(4000,()=>console.log('server is running'))