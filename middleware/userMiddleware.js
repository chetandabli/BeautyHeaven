require("dotenv").config();
const secretKey = process.env.secret;
var jwt = require("jsonwebtoken");

const {client} = require('../config/db');
// const { UsersModel } = require("../module/userModule");

const { UsersModel } = require("../models/user.model");


async function AuthenicateUser(req, res, next) {
  let token = req.headers.authorization;
  // let isfound = await client.SISMEMBER('blackToken',token)
  let isfound = false
  if(isfound){
    console.log(isfound)
    res.send({ message: "Not Authorized" });
  }else{
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (decoded) {
        let userData = await UsersModel.findAll({
          where: { email: decoded.email },
        });
        if (userData.length == 1) {
          next();
        } else {
          res.send({ message: "Not Authorized" });
        }
      } else {
        res.send([{ message: "Not Authorized!" }]);
      }
    });
  }
  
}

module.exports = { AuthenicateUser };
