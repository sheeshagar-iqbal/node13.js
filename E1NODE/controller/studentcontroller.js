const studentget =(req,res)=>{
    res.send('<h1>student page</h1>')
}

const studentpost=(req,res)=>{
    res.send(req.body)
}
module.exports ={studentget,studentpost}