const userget =(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    
    res.send('<h1>user page</h1>')
}

const userpost=(req,res)=>{
    res.send(req.body)
}
module.exports ={userget,userpost}