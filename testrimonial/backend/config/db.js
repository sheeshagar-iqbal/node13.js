const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testrimonial')
.then(()=>console.log('databse connected'))
.catch((e)=>console.log(e))