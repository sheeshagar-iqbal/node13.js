import express from 'express'
import Contact from '../models/contacts.model.js'
import { addContact, addContactPage, deleteContact, getContacts, showContact, updateContact, updatecontactpage } from '../controller/contacts.controller.js'
const router =express.Router()


router.get('/',getContacts)

router.get('/show-contact/:id', showContact)
router.get('/add-contact',addContactPage)
router.post('/add-contact', addContact)

router.get('/update-contact/:id',updatecontactpage )
router.post('/update-contact/:id',updateContact )
router.get('/delete-contact/:id',deleteContact)


export default router