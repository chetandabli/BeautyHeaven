const Sequelize = require("sequelize")
const {seq} = require("../config/db")

const professionalModel = seq.define("professionalLogin", {
    professionalName: Sequelize.STRING,
    phoneNumber : Sequelize.STRING,
    email : Sequelize.STRING,
    password : Sequelize.STRING,
})

module.exports = {professionalModel}


