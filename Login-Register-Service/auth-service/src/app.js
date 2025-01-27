const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/AuthRoutes'); // Rutas de autenticación
const protectedRoutes = require('./routes/ProtectedRoutes'); // Rutas protegidas para admin y user

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes); // Endpoint base para autenticación
app.use('/api', protectedRoutes); // Endpoint base para rutas protegidas

module.exports = app; // Exporta la aplicación
