const mongoose=require('mongoose')


let stSchema=new mongoose.Schema({
    name:String,age:Number,city:String
})

let student=mongoose.model("student",stSchema)
module.exports= student