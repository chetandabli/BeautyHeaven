const express = require("express");
const userRouter = express.Router();
const {AuthenicateUser} = require("../middleware/userMiddleware")
const {
  getUserData,
  userRegister,
  userLogin,
  availableSlots,
  beautySlotsBooking,
  particularSlots
} = require("../controllers/user.controller");

//GET ALL DATA OF USERS
userRouter.get("/", getUserData);


// REGISTER BY USERS
userRouter.post("/register", userRegister);


// LOGIN BY USERS
userRouter.post("/login", userLogin);


//AUTHENTICATION OF USER
userRouter.use(AuthenicateUser)


//AVAILABLE SLOTS OF PROFESSIONAL
userRouter.get("/availableSlots", availableSlots)


//BOOKING SLOTS BY USERS
userRouter.put("/bookingSlots/:id", beautySlotsBooking)


//PARTICULAR USERS SLOTS
userRouter.get("/particularSlots", particularSlots)


module.exports = { userRouter };
