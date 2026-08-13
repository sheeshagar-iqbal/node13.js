const Productmodel = require('../models/product.model')

const createProduct= async (req,res)=>{
     let data =await Productmodel.create(req.body)
    res.json(data)
}
const retriveProduct= async (req,res)=>{
     let data =await Productmodel
      .find().populate("category");

    res.json(data);
}

const retriveProductbycategory= async (req,res)=>{
    let cate =req.query.category
    // console.log(cate);
    
     let data =await Productmodel
      .find({category:cate}).populate("category");

    res.json(data);
}

module.exports = {createProduct,retriveProduct,retriveProductbycategory}