import mongoose, { model } from "mongoose";

const studentschema =new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true,
        enum:["male","female","other"]
    },
    profile_pic:{
        type:String,
        
    }

})

export default mongoose.model('students',studentschema)