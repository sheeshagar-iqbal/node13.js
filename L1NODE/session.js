import express from 'express'
const app =express()
import session from 'express-session'
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv'
dotenv.config()
app.use(session({
    secret:'sessionsecredt',
     resave: false,
  saveUninitialized: true,
   store: MongoStore.create({ mongoUrl: process.env.mongourl }),
  cookie: {maxAge:1000*60*60*24}
}))

app.get('/',(req,res)=>{
    res.send(`<h1>session ${ req.session.username}<h1/>` )
})
app.get('/set-session',(req,res)=>{
    req.session.username='ankur'
    res.send('<h1>session create suceesfully<h1/>')

})

app.get('/get-session',(req,res)=>{
    req.session.username
    res.send(`<h1>session ${ req.session.username}<h1/>`)

})

app.get('/get-about',(req,res)=>{
    req.session.username
    res.send(`<h1>session ${ req.session.username}<h1/>`)

})

app.get('/destroy',(req,res)=>{
    req.session.destroy((err)=>{
        if (err){
            return res.send(`<h1>something wrong<h1/>`)

        }else{
    return res.send(`<h1>destory <h1/>`)

        }
    })

})

app.listen(4000,()=>console.log('server is running'))