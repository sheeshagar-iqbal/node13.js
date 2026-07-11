const express =require('express')
const user = require('./router/userrouter')
const superadmin = require('./router/superadminrouter')
const admin = require('./router/adminrouter')
const app =express()

app.use(express.json())
app.use('/user',user)
app.use('/admin',admin)
app.use('/superadmin',superadmin)

app.listen(4000,()=>console.log('server running'))