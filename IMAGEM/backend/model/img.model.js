const mongoose  = require("mongoose");

const imgschema = new mongoose.Schema({
       image:{
        type:String
       },
       firstname:{
        type:String
       },
       lastname:{
        type:String
       },
       email:{
        type:String
       },
       phone:{
        type:String
       },
       geentr:{
        type:String,
        enum:['male',"female",'other']
       }
})

const imgmodel =mongoose.model("imgmodel",imgschema)

module.exports= imgmodel