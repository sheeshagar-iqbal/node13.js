// const mongoose =require('mongoose')
import mongoose from "mongoose";

const contactschema= mongoose.Schema({
    first_name:{
        type:String
    },
     last_name:{
        type:String
    },
     email:{
        type:String
    },
     phone:{
        type:String
    },
    address:{
            type:String
    }
})
const Contact =mongoose.model('contact',contactschema);
// module.exports =contact
export  default Contact 
