const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    const token = req.headers.authorization
    let verified =jwt.verify(token,"secretkey")
    console.log(verified);
    userdata =verified

    next()
    
}


const usermiddle = (req,res,next)=>{
    if(userdata.role!="user"){
        console.log({message:"access denied"});
        
    }else{
        console.log({message:"logged"});
        next()
    }
    
}

module.exports ={auth,usermiddle}