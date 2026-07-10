const express = require('express')
const { userget, userpost } = require('../controller/usercontroller')
const router =express.Router()

router.get('/',userget)
router.get('/',userpost)



module.exports =router