const Sequelize = require("sequelize");
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

// const redis = require('redis');
const {createClient } =  require('redis');

const client = createClient({
    password: '32zHowpaBGmoS9RDyVlIgdfVVdRrMSh4',
    socket: {
        host: 'redis-11887.c81.us-east-1-2.ec2.cloud.redislabs.com',
        port: 11887
    }
});
client.on("error", (err) => console.log("Redis Client Error", err));

module.exports = {seq,client}
