const { professionalModel } = require("../module/professionalModule");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//ALL PROFESSIONAL DATA
let getProfessionalData = async (req, res) => {
  try {
    let data = await professionalModel.findAll();
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

//PROFESSIONAL REGISTER
let professionalRegister = async (req, res) => {
  try {
    let { professionalName, email, password } = req.body;
    let data = await professionalModel.findAll({ where: { email } });
    if (data.length != 0) {
      res.send({ message: "Email already register" });
      return;
    }
    bcrypt.hash(password, 5, async (err, hashed_pass) => {
      if (err) {
        res.send({ message: "Error while Hashing Password" });
      } else {
        let data = await professionalModel.create({
          professionalName,
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

//PROFESSIONAL LOGIN
let professionalLogin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let check = await professionalModel.findAll({ where: { email } });
    if (check.length == 1) {
      bcrypt.compare(password, check[0].password, async (err, result) => {
        if (result) {
          var token = jwt.sign({ email }, process.env.secret, {
            expiresIn: "5d",
          });

          res.send({
            message: `${check[0].professionalName} is successfully logged in`,
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
    res.send([{ message: "Something Went Wrong" }]);
  }
};

module.exports = {
  getProfessionalData,
  professionalRegister,
  professionalLogin,
};
