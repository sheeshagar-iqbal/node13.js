const mongoose = require('mongoose')

const categoryschema= new mongoose.Schema({
        name:{
            type:String,
            required:true,
            unique:true
        }

})
const categorymodel =mongoose.model('category',categoryschema)
module.exports = categorymodel