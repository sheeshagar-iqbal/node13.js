const express = require('express')
const { createProduct, retriveProduct, retriveProductbycategory } = require('../controller/product.controller')

const router = express.Router()

router.post('/ecommerce/product',createProduct)
router.get('/ecommerce/product',retriveProduct)
router.get('/ecommerce/product/category',retriveProductbycategory)


module.exports =router