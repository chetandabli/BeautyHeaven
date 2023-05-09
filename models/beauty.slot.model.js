const { Sequelize, DataTypes } = require("sequelize");




const BeautySlot = seq.define("beautySlots", {
    beautyType: {type: Sequelize.STRING,allowNull: false},
    bookingTime: {type: Sequelize.STRING,allowNull: false},
    status: {type: DataTypes.BOOLEAN, defaultValue: false},
    progress: {type: DataTypes.BOOLEAN, defaultValue: false},
    professionalName : {type: Sequelize.STRING,allowNull: true},
    professionalEmail : {type: Sequelize.STRING,allowNull: true},
    professionalID : {type: Sequelize.STRING,allowNull: true},
    userName : {type: Sequelize.STRING,allowNull: true},
    userEmail : {type: Sequelize.STRING,allowNull: true},
    userID : {type: Sequelize.STRING,allowNull: true},
});

module.exports = { BeautySlot };