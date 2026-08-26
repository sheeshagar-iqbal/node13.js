const express = require("express")
const { userlogin, profile, contact, userPass } = require("../controller/jwt.controller")
const { auth, usermiddle } = require("../middleware/auth.middleware")
const router = express.Router()

router.post("/",userlogin)
router.get("/",auth,usermiddle,profile)
router.get("/contact",auth,usermiddle,contact)
router.post("/userpass",userPass)

module.exports =router 