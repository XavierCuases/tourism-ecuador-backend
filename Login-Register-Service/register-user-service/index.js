const express = require('express');
const cors = require('cors');
const { app, sequelize } = require('./src/app');

const PORT = 3000;

// Configuración básica de CORS
app.use(cors({
    origin: 'http://localhost:3000', // Update this to the domain you need
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Connect to the database and start the server
sequelize.sync({ alter: true }) // Synchronize database structure with models
    .then(() => {
        console.log('Connected database');
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Error connecting to the database:', error));
