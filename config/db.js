const Sequelize = require("sequelize");
const {createClient} = require('redis');
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

const client = createClient({
    password: process.env.redisClientPassword,
    host: process.env.redisClientHostlink,
    port: process.env.redisClientHost
});

client.on('ready', () => {
    console.log('Redis client connected');
});

client.on('error', err => {
    console.log('Redis client error', err);
});

module.exports = {seq,client}
