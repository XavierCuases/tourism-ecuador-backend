const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT,
      dialectOptions: {
        ssl: {
          require: true,  // Habilita SSL
          rejectUnauthorized: false  // Desactiva la validación del certificado (si es necesario)
        }
      }
    }
  );
  
module.exports = sequelize;
