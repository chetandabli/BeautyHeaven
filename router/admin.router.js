const express = require("express");
require("dotenv").config();
const {adminRegister,
        adminLogin,
        getProfessionalData,
        getAppointmentsData,
        UpdateProfessional,
        RemoveProfessional} = require('../controllers/admin.controller')
const {AuthenticateAdmin} = require("../middleware/aminMiddleware")
const adminRouter = express.Router();

//Register Admin
adminRouter.post('/register',adminRegister);

//Login Admin
adminRouter.post('/login',adminLogin);

//Authenticate Admin
// adminRouter.use(AuthenticateAdmin);

//All Professionals Data
adminRouter.get('/professionals',getProfessionalData);

//All Appointments Data
adminRouter.get('/appointments',getAppointmentsData);

//Update Professionals Data
adminRouter.patch('/updateProfessional',UpdateProfessional);

//Remove Professional
adminRouter.delete('/removeProfessional',RemoveProfessional);

module.exports = {adminRouter};