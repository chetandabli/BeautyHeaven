require("dotenv").config();
const secretKey = process.env.secret;
var jwt = require("jsonwebtoken");
// const { professionalModel } = require("../module/professionalModule");

async function AuthenicateProfessional(req, res, next) {
  let token = req.headers.authorization;
  // res.send(token)
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

module.exports = { AuthenicateProfessional };
