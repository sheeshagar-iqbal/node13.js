const express = require('express')
const { createProduct, retriveProduct, retriveProductbycategory, deleteProduct, getbyidProduct, putProduct } = require('../controller/product.controller')

const router = express.Router()

router.post('/ecommerce/product',createProduct)
router.get('/ecommerce/product',retriveProduct)
router.get('/ecommerce/product/category',retriveProductbycategory)
router.delete('/ecommerce/product/:id',deleteProduct)
router.get('/ecommerce/product/:id',getbyidProduct)
router.put('/ecommerce/product/:id',putProduct)


module.exports =router