const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME_US,
    process.env.DB_USER_US,
    process.env.DB_PASSWORD_US,
    {
      host: process.env.DB_HOST_US,
      dialect: 'postgres',
      port: process.env.DB_PORT_US,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }
);

module.exports = sequelize;
