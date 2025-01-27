const { app, sequelize } = require('./src/app');

const PORT = 3000;

sequelize.sync()
    .then(() => {
        console.log('Base de datos conectada');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Error al conectar con la base de datos:', error));
