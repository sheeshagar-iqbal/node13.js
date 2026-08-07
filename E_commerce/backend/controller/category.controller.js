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
const updateCategory= async (req,res)=>{
     let data =await categorymodel.findByIdAndUpdate(req.params.id,req.body)
    res.json(data)
}
const deleteCategory= async (req,res)=>{
     let data =await categorymodel.findByIdAndDelete(req.params.id)
    res.json(data)
}
module.exports = {createCategory,retriveCategory,updateCategory,deleteCategory}