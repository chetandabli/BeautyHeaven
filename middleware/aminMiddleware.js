require("dotenv").config();
const secretKey = process.env.secret;
var jwt = require("jsonwebtoken");

const {client} = require('../config/db');
// const { adminModel } = require("../module/adminModule");

const { adminModel } = require("../models/admin.model");


async function AuthenticateAdmin(req, res, next) {
  let token = req.headers.authorization;
  // res.send(token)
  let isfound = await client.SISMEMBER('blackToken',token)
  if(isfound){
    res.send({ message: "Not Authorized" });
  }else{
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (decoded) {
        let adminData = await adminModel.findAll({
          where: { email: decoded.email },
        });
        if (adminData.length == 1) {
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

module.exports = { AuthenticateAdmin };
