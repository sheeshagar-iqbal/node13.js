const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userlogin = (req,res)=>{
    const {email,password} =req.body

    if(email=="q@gmail.com" && password =="123"){
        let token =jwt.sign({
            userId:"213",
            role:"user"
        },
        "secretkey"
    )
    res.json({message:"user logge in " ,token:token})
    }else{
        res.json({message:"user not found"})
    }
}


const profile = (req,res)=>{
    res.json({"message":"welcome"})
}

const contact = (req,res)=>{
    res.json({"message":"contact"})
}



const userPass =async(req,res)=>{
    const {email,password}=req.body
    const hashpass =await bcrypt.hash(password,10)
    console.log(hashpass);
    res.json(hashpass)
    
}
module.exports ={userlogin,profile,contact,userPass}