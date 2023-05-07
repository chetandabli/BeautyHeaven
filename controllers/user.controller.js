const { UsersModel } = require("../models/user.model");
const { BeautySlot } = require("../models/beauty.slot.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//GET ALL DATA OF USERS
let getUserData = async (req, res) => {
  try {
    let data = await UsersModel.findAll();
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

// REGISTER BY USERS
let userRegister = async (req, res) => {
  try {
    let { username, phoneNumber, email, password } = req.body;
    let data = await UsersModel.findAll({ where: { email } });
    if (data.length != 0) {
      res.send({ message: "Email already register" });
      return;
    }
    bcrypt.hash(password, 5, async (err, hashed_pass) => {
      if (err) {
        res.send({ message: "Error while Hashing Password" });
      } else {
        let data = await UsersModel.create({
          username,
          phoneNumber,
          email,
          password: hashed_pass,
        });
        res.status(200).json({
          isError: false,
          message: `registration successfull`,
          data,
        });
      }
    });
  } catch (error) {
    // res.send([{ "message": "Error while Registering" }]);
    console.log(error);
  }
};

// LOGIN BY USERS
let userLogin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let check = await UsersModel.findAll({ where: { email } });
    if (check.length == 1) {
      bcrypt.compare(password, check[0].password, async (err, result) => {
        if (result) {
          // Generating Token
          var token = jwt.sign(
            { email: check[0].email, username: check[0].username },
            process.env.secret,
            {
              expiresIn: "7d",
            }
          );
          // Sending Response
          res.send({
            message: `${check[0].username} is successfully logged in`,
            username: check[0].username,
            Access_Token: token,
          });
        } else {
          res.send({ message: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ message: "Wrong Credentials" });
    }
  } catch (error) {
    res.send({ message: "Something Went Wrong" });
  }
};

//USERS SEE THE ALL AVAILABLE SLOTS
let availableSlots = async (req, res) => {
  try {
    // let token = req.headers.authorization
    // let decoded = jwt.verify(token, process.env.secret)
    let beautyslot = await BeautySlot.findAll({
      where: {
        status: false,
      },
    });
    res.status(200).json({
      isError: false,
      message: `AVAILABLE SLOTS`,
      beautyslot,
    });
  } catch (error) {
    console.log(error);
  }
};

//SLOT BOOKING BY USER
let beautySlotsBooking = async (req, res) => {
  try {
    let token = req.headers.authorization;
    let decoded = jwt.verify(token, process.env.secret);
    let { username, email } = decoded;
    let beautyId = req.params.id;
    let {
      id,
      beautyType,
      bookingTime,
      status,
      progress,
      professionalName,
      professionalEmail,
      professionalID,
      userName,
      userEmail,
      userID,
      createdAt,
      updatedAt,
    } = await BeautySlot.findOne({ where: { id: beautyId } });
    let beautyslot = await BeautySlot.upsert({
      id,
      beautyType,
      bookingTime,
      status: true,
      progress,
      professionalName,
      professionalEmail,
      professionalID,
      userName: username,
      userEmail: email,
      userID,
      createdAt,
      updatedAt,
    });
    res.status(200).json({
      isError: false,
      message: `Add slot successfull`,
      beautyslot,
    });
  } catch (error) {
    console.log(error);
  }
};


//GET PATICULAR USER BOOKING SLOTS
let particularSlots = async (req, res) => {
  try {
    let token = req.headers.authorization
    let decoded = jwt.verify(token, process.env.secret)
    let { username, email } = decoded;
    let beautyslot = await BeautySlot.findAll({
      where: {
        status: true,
        userEmail : email
      },
    });
    res.status(200).json({
      isError: false,
      message: `AVAILABLE SLOTS`,
      beautyslot,
    });
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  getUserData,
  userRegister,
  userLogin,
  availableSlots,
  beautySlotsBooking,
  particularSlots
};
