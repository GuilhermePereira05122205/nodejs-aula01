var sequelize = require("../src/sequelize")
const {DataTypes } = require('sequelize');
// Table user

sequelize.define("User", {
    firstname: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    lastname: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
    
})

module.exports = sequelize;