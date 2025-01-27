const { Sequelize, DataTypes } = require('sequelize');
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
    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'users', // Asegura que Sequelize use el nombre exacto de la tabla
    freezeTableName: true, // Evita que Sequelize modifique el nombre de la tabla
    createdAt: 'created_at', // Mapea createdAt a created_at
    updatedAt: 'updated_at', // Mapea updatedAt a updated_at
});

module.exports = User;
