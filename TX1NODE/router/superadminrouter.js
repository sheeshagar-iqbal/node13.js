const express =require('express')
const superadminpost = require('../controller/superadmincontrollere')
const router =express.Router()


router.post('/',superadminpost)

module.exports =router