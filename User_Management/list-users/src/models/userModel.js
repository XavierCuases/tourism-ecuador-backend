const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

// Definimos el modelo de usuario
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
    }
}, {
    tableName: 'users',
    timestamps: false,  
});

module.exports = { User };
