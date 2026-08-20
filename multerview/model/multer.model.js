const mongoose =require('mongoose')

const multerschema = mongoose.Schema({
    name:{
        type:String
    },
     image:{
        type:String
    }
})

module.exports =mongoose.model("multer",multerschema)