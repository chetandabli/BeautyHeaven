const express = require("express");
const userRouter = express.Router();

const {client} = require('../config/db')


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


userRouter.get("/logout", async(req,res) => {
  let token = req.headers.authorization;
  try{
     await client.SADD('blackToken',token);
     res.send("logged out Successfully");
  }catch(err){
    res.sendStatus(400)

  }
}
);


//AUTHENTICATION OF USER
userRouter.use(AuthenicateUser)


//AVAILABLE SLOTS OF PROFESSIONAL
userRouter.get("/availableSlots", availableSlots)


//BOOKING SLOTS BY USERS
userRouter.put("/bookingSlots/:id", beautySlotsBooking)


module.exports = { userRouter };
