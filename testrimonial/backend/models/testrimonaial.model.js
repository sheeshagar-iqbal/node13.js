const mongoose = require("mongoose");

const tesschema = mongoose.Schema({
    name:String,
    city:String,
    review:String,
    age:Number,
    case:String
})

const tesmodel = mongoose.model('testri',tesschema)
module.exports=tesmodel