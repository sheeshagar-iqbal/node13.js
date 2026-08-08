const mongoose = require('mongoose')

const productschema= new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        stock:{
            type:Number,
            required:true
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'category',
            required:true
        }

})
const productmodel =mongoose.model('product',productschema)
module.exports = productmodel