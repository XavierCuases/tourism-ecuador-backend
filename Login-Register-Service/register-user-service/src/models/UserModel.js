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
        type: DataTypes.STRING(20), 
        defaultValue: 'user', 
    },
}, {
    tableName: 'users',
    freezeTableName: true, 
    timestamps: false, 
});

module.exports = User;
