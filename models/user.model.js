
const Sequelize = require("sequelize")
const {seq} = require("../config/db")

const UsersModel = seq.define("userlogin", {
    username: Sequelize.STRING,
    email : Sequelize.STRING,
    phoneNumber : Sequelize.STRING,
    password : Sequelize.STRING
})

module.exports = {UsersModel}
