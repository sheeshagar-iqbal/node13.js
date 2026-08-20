const mongoose  = require("mongoose");

const imgschema = new mongoose.Schema({
       image:{
        type:String
       }
})

const imgmodel =mongoose.model("imgmodel",imgschema)

module.exports= imgmodel