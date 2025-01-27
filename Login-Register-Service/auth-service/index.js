const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Import routes
const authRoutes = require('./routes/AuthRoutes'); // Login routes
const protectedRoutes = require('./routes/ProtectedRoutes'); // Protected routes

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes); // Endpoint base para login
app.use('/api', protectedRoutes); // Endpoint base para rutas protegidas

// Sync database and start the server
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });

module.exports = app;
