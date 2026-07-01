import express from 'express'
import Contact from '../models/contacts.model.js'
import { addContact, addContactPage, deleteContact, getContacts, getvalidation, postvalidation, showContact, updateContact, updatecontactpage } from '../controller/contacts.controller.js'
const router =express.Router()
import {body,validationResult} from'express-validator'

//  password email phone usercity address
const validationhere=[
    body('first_name').notEmpty().withMessage('name most be complatre '),
    body('password').notEmpty().withMessage('must it is required').isLength({min:3,max:10}).withMessage('password bt 3 to 10 charchater'),
    body('email').isEmail().withMessage('please provide the valid email'),
    body('phone').isNumeric().withMessage('phone number must be int'),
    body('usercity').isIn(['bhopal','goa','agra','mumbai']).withMessage('select one give field')

]


router.get('/',getContacts)

router.get('/show-contact/:id', showContact)
router.get('/add-contact',addContactPage)
router.post('/add-contact', addContact)

router.get('/update-contact/:id',updatecontactpage )
router.post('/update-contact/:id',updateContact )
router.get('/delete-contact/:id',deleteContact)
router.get('/validator-contact',getvalidation)
router.post('/validator-contact',validationhere,postvalidation)


export default router