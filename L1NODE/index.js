const express =require('express')
const app= express()

app.listen(4000,()=> console.log('server run sucessfully')
)

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  const ohj=[
    {
      name:'rohit',
      age:23
    },
    {
      name:'mukul',
      age:23
    }
  ]
  // res.send('Hello world ,world are you safer so problem in !')
  // res.json({name:'khusi',age:23})
  // res.jsonp({name:'khusi',age:23})
  // res.json(ohj)
  res.send('<h1>hello<h1/>')
})

app.get('/about',(req,res)=>{
  // res.redirect('https:www.google.com')
  // res.redirect('..')       open previous page
  res.render('user')
})
app.get('/user',(req,res)=>{
  res.render('user')
})

app.get('/download',(req,res)=>{
  // res.download("C:/Users/sheeshragar/Desktop/HTML notes.txt",'html')
  res.sendFile("C:/Users/sheeshragar/Desktop/HTML notes.txt"  )   //view only not download)
})

app.get('/end',(req,res)=>{
  res.write('this is testing')    // text ko note karne me
  res.end()      // res.end end karne ke liye
  res.send('hi')    //res.send ke dat koi res nhi bhej sakte hai
})


app.get('/error',(req,res)=>{
  // res.sendStatus(404)
  res.sendStatus(200)
  
  // res.status(200).send('hello')
})

// 200-ok 201created 403 -forbidden 500 inter serval error 503 service unavailable 504 gateway timeout 
