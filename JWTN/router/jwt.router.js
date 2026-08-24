const express = require("express")
const { userlogin } = require("../controller/jwt.controller")
const router = express.Router()

router.post("/",userlogin)

module.exports =router