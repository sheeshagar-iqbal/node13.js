const mongoose =require('mongoose')
const stSchema =new mongoose.Schema({
    name:{
        type:String,
        maxlength:20,
        minlength:3,
        required:true
    },
    age:{
        type:Number,
        max:80,
        min:18,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contact:{
        type:String,
        maxlength:10,
        minlength:10,
        required:true
    }
})

const stdmodel = mongoose.model("stdmodel",stSchema)
module.exports= stdmodel