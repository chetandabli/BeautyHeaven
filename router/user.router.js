
const express = require("express")
const userRouter = express.Router()
const {getUserData, userRegister, userLogin} = require("../controllers/user.controller")


//GET ALL DATA OF USERS
userRouter.get("/", getUserData)


// REGISTER BY USERS
userRouter.post("/register", userRegister)


// LOGIN BY USERS
userRouter.post("/login", userLogin)


module.exports = {}