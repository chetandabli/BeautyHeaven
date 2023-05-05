require("dotenv").config();
const secretKey = process.env.secret;
var jwt = require("jsonwebtoken");
// const { UsersModel } = require("../module/userModule");

async function AuthenicateUser(req, res, next) {
  let token = req.headers.authorization;
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
      res.send([{ message: "Not Authorized" }]);
    }
  });
}

module.exports = { AuthenicateUser };
