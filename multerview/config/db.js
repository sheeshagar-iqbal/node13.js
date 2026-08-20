const mongoose =require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/flagmulter")
.then(()=>console.log("db connent success"))
.catch((err)=>console.log("db connent success",err))