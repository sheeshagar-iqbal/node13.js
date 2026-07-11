const adminpost = (req,res)=>{
    const {id} =req.params
    console.log(id, typeof(id));
    
    if(id == '123'){
        return res.send('login here')
    }

    res.send('please valid id')
}
module.exports =adminpost
