// const express =require('express')
import express from 'express'
const app =express()
// const mongoose =require('mongoose')
import mongoose  from 'mongoose'
// const Contact = require('./models/contacts.model.js')
import Contact from './models/contacts.model.js'
import contactrouter from './routes/contact.routes.js'
import { connectDB } from './config/database.config.js'
import multer  from 'multer'
import session from 'express-session'

app.use(session({
    secret:'apikey',
     resave: false,
  saveUninitialized: true,
  cookie: {maxAge:1000*60*60*24}
}))

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))



app.use('/',contactrouter)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).send(err.message);
  }

  res.status(500).send(err.message);
});
connectDB()

app.listen(process.env.port,()=>{
    console.log('4000 port contacted sucessfully');
    
})