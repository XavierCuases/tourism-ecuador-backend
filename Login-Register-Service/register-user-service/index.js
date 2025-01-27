const express = require('express');
const cors = require('cors');
const { app, sequelize } = require('./src/app');

const PORT = 3000;

// Configuración básica de CORS
app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto al dominio que necesites
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Conectar la base de datos y levantar el servidor
sequelize.sync()
    .then(() => {
        console.log('Connected database');
        app.listen(PORT, () => {
            console.log(`Server running in http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Error connecting to the database:', error));
