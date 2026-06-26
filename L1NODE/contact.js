const express =require('express')
const app =express()
const mongoose =require('mongoose')
const Contact = require('./models/contacts.model.js')
mongoose.connect('mongodb://127.0.0.1:27017/contact-app')
.then(()=> console.log('database contacted sucessfully')
)

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.get('/',async (req,res)=>{
        const contact=   await Contact.find()
            // res.json(contact)
        res.render('home',{contact})
})

app.get('/show-contact/:id', async(req,res)=>{
    // const contact = await Contact.findOne({_id:req.params.id})
    const contact = await Contact.findById(req.params.id)
    // res.json(contact)
    res.render('show-contact', {contact})

})
app.get('/add-contact',(req,res)=>{
    res.render('add-contact')

})
app.post('/add-contact',(req,res)=>{

})

app.get('/update-contact/:id',(req,res)=>{
    res.render('update-contact')


})
app.post('/update-contact/:id',(req,res)=>{

})
app.get('/delete-contact/:id',(req,res)=>{

})


app.listen(4000,()=>{
    console.log('4000 port contacted sucessfully');
    
})