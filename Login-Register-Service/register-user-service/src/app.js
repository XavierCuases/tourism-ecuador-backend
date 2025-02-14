const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

module.exports = { app, sequelize };
