const express = require("express");
const {AuthenicateProfessional} = require("../middleware/professionalMiddleware")
const professionalRouter = express.Router();
const {
  getProfessionalData,
  professionalRegister,
  professionalLogin,
  beautySlotsOpen,
  bookedSlots
} = require("../controllers/professional.controller");

//GET ALL DATA OF professional
professionalRouter.get("/", getProfessionalData);

// REGISTER BY professional
professionalRouter.post("/register", professionalRegister);

// LOGIN BY professional
professionalRouter.post("/login", professionalLogin);


//BEAUTY SLOT BOOKING 
professionalRouter.use(AuthenicateProfessional)
professionalRouter.post("/createBeautySlots", beautySlotsBooking);

module.exports = { professionalRouter };
