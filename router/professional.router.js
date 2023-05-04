const express = require("express")

const professionalRouter = express.Router()
const {getProfessionalData, professionalRegister, professionalLogin} = require("../controllers/professional.controller")

//GET ALL DATA OF professional
professionalRouter.get("/", getProfessionalData)


// REGISTER BY professional
professionalRouter.post("/register", professionalRegister)


// LOGIN BY professional
professionalRouter.post("/login", professionalLogin)


module.exports = {professionalRouter}