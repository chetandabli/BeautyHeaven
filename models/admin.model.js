const Sequelize = require("sequelize")
const {seq} = require("../config/db")


const adminModel = seq.define("adminLogin", {
    adminName: Sequelize.STRING,
    email : Sequelize.STRING,
    password : Sequelize.STRING,
})

module.exports = {adminModel}