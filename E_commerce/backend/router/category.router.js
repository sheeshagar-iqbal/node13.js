const express = require('express')
const { createCategory, retriveCategory } = require('../controller/category.controller')
const router = express.Router()

router.post('/ecommerce/category',createCategory)
router.get('/ecommerce/category',retriveCategory)

module.exports =router