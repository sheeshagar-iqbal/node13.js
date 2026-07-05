import express from 'express'
const app =express()
import cookieparser from 'cookie-parser'
app.use(cookieparser())

app.get('/',(req,res)=>{
    res.send("ji")
})
app.get('/setcookie',(req,res)=>{
    res.cookie("user","iqbal",{
        maxAge:10000*60*60*2,
        httpOnly:true
    })
    res.send('cookie set')
})
app.get('/getcookie',(req,res)=>{
    res.send(req.cookies.user)
})
app.get('/destroycookie',(req,res)=>{
    res.clearCookie('user')
    res.send("ji")
})

app.listen(4000,()=>{
    console.log('4000 port contacted sucessfully');
    
})