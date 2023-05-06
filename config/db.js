const Sequelize = require("sequelize")

require("dotenv").config()

const seq = new Sequelize("beauty_heaven", process.env.sqlusername, process.env.sqlPass, {
    host: "aws.connect.psdb.cloud",
    dialect : "mysql",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,        
        }
    }
})

module.exports = {seq}