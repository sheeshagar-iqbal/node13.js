// const mongoose =require('mongoose')
import mongoose from "mongoose";


const userschema= mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
     email:{
        type:String,
        require:true,
        unique:true
    },
     password:{
        type:String,
        require:true
    }
})

const User =mongoose.model('user',userschema);
// module.exports =contact
export  default User 
