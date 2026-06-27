// const express =require('express')
import express from 'express'
const app =express()
// const mongoose =require('mongoose')
import mongoose  from 'mongoose'
// const Contact = require('./models/contacts.model.js')
import Contact from './models/contacts.model.js'
import contactrouter from './routes/contact.routes.js'
import { connectDB } from './config/database.config.js'

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/',contactrouter)
connectDB()

app.listen(process.env.port,()=>{
    console.log('4000 port contacted sucessfully');
    
})