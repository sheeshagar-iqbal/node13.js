 const createstudent =async (req,res)=>{
    let data=  await student.create(req.body)
    res.json(data)
}