require("dotenv").config();
const secretKey = process.env.secret;
var jwt = require("jsonwebtoken");

const {client} = require('../config/db');
// const { professionalModel } = require("../module/professionalModule");

const { professionalModel } = require("../models/professional.model");


async function AuthenicateProfessional(req, res, next) {
  let token = req.headers.authorization;
  // res.send(token)
  let isfound = await client.SISMEMBER('blackToken',token)
  if(false){
    console.log(isfound)
    res.send({ message: "Not Authorized, token blacklisted" });
  }else{
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (decoded) {
        let professionalData = await professionalModel.findAll({
          where: { email: decoded.email },
        });
        if (professionalData.length == 1) {
          next();
        } else {
          res.send({ message: "Not Authorized" });
        }
      } else {
        res.send({ message: "Not Authorized" });
      }
    });
  }
  
}

module.exports = { AuthenicateProfessional };
