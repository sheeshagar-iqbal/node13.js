const express = require('express')
const { createstudent, getstudent, getbyidstudent, deletestudent, searchstudent, updatebyid, updatemany, sortstudent, filterstudent } = require('../controllers/student.controller')
const router = express.Router()


router.post('/student',createstudent)
router.get('/student',getstudent)
router.get('/student/sort',sortstudent)
router.get('/student/filtercity',filterstudent)

router.get('/student/:id',getbyidstudent)
router.delete('/student/:id',deletestudent)

router.put('/student/updatemany',updatemany)
router.put('/student/:id',updatebyid)
router.get('/student/search/s',searchstudent)


module.exports=  router