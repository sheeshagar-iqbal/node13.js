const jwt = require('jsonwebtoken')

const userlogin = (req,res)=>{
    const {email,password} =req.body

    if(email=="q@gmail.com" && password =="123"){
        let token =jwt.sign({
            userId:"213"
        },
        "secretkey"
    )
    res.json({message:"user logge in " ,token:token})
    }else{
        res.json({message:"user not found"})
    }
}

module.exports ={userlogin}