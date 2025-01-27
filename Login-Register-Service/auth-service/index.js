const app = require('./src/app'); // Importa app.js desde src
const sequelize = require('./src/config/database'); // Conexión a la base de datos

// Sync database and start the server
sequelize.sync({ alter: true }) // Ajusta la base de datos según los modelos
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
