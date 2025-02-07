const express = require('express');
const cors = require('cors');
const swaggerSetup = require('./src/swagger'); 
const { app, sequelize } = require('./src/app');
const userRoutes = require('./src/routes/UserRoutes');

const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/api/users', userRoutes);

swaggerSetup(app);

sequelize.sync({ alter: true }) 
    .then(() => {
        console.log('Connected database');
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
            console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(error => console.error('Error connecting to the database:', error));
