const express = require("express")

const professionalRouter = express.Router()
const {getProfessionalData, professionalRegister, professionalLogin} = require("../controllers/professional")

//GET ALL DATA OF professional
professionalRouter.get("/",)


// REGISTER BY professional
professionalRouter.post("/register", )


// LOGIN BY professional
professionalRouter.post("/login",)


module.exports = {professionalRouter}