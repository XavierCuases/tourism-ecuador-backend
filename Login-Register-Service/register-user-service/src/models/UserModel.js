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
    role: {
        type: DataTypes.STRING(20), // Define el rol del usuario
        defaultValue: 'user', // Valor por defecto
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true, // Permitir valores nulos temporalmente
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true, // Permitir valores nulos temporalmente
    },
    
}, 
      
{
    tableName: 'users', // Usa exactamente este nombre de tabla
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
    timestamps: true, // Activa las columnas `createdAt` y `updatedAt`
    createdAt: 'created_at', // Mapea `createdAt` a `created_at`
    updatedAt: 'updated_at', // Mapea `updatedAt` a `updated_at`
});

module.exports = User;
