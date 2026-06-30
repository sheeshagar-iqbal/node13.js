// const mongoose =require('mongoose')
import mongoose from "mongoose";
import mongoosePaginat from 'mongoose-paginate-v2'

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
contactschema.plugin(mongoosePaginat)
const Contact =mongoose.model('contact',contactschema);
// module.exports =contact
export  default Contact 
