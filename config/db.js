const Sequelize = require("sequelize")

require("dotenv").config()

const seq = new Sequelize("beautyHeaven", "root", process.env.sqlPass, {
    host: "localhost",
    dialect : "mysql"
})

module.exports = {seq}