const express = require('express')
const { createProduct, retriveProduct } = require('../controller/product.controller')

const router = express.Router()

router.post('/ecommerce/product',createProduct)
router.get('/ecommerce/product',retriveProduct)


module.exports =router