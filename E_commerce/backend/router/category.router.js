const express = require('express')
const { createCategory, retriveCategory, updateCategory, deleteCategory } = require('../controller/category.controller')
const router = express.Router()

router.post('/ecommerce/category',createCategory)
router.get('/ecommerce/category',retriveCategory)
router.put('/ecommerce/category/:id',updateCategory)
router.delete('/ecommerce/category/:id',deleteCategory)

module.exports =router