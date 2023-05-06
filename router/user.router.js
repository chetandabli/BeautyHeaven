const express = require("express");
const userRouter = express.Router();
const {client} = require('../config/db')

const {
  getUserData,
  userRegister,
  userLogin,
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

module.exports = { userRouter };
