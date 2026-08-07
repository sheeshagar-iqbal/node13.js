const categorymodel = require('../models/category')

const createCategory= async (req,res)=>{
    const {name}= req.body
     let data =await categorymodel.create({name})
    res.json(data)
}
const retriveCategory= async (req,res)=>{
     let data =await categorymodel.find()
    res.json(data)
}
module.exports = {createCategory,retriveCategory}