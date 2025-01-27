const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(20), // Role column to define user type (e.g., "admin" or "user")
        defaultValue: 'user', // Default role is "user"
    },
}, {
    tableName: 'users',
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
    timestamps: false, // Disable automatic timestamps
});

module.exports = User;
