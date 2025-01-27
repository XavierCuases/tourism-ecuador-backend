const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/AuthRoutes'); // Login and authentication routes
const protectedRoutes = require('./routes/ProtectedRoutes'); // Protected routes for admin and users

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes); // Base endpoint for authentication (login)
app.use('/api', protectedRoutes); // Base endpoint for protected routes

module.exports = { app, sequelize };
