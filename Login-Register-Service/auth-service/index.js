const { app, sequelize } = require('./src/app');

const PORT = process.env.PORT || 3001;

sequelize.sync()
    .then(() => {
        console.log('Connected database');
        app.listen(PORT, () => {
            console.log(`Server running in http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Error connecting to the database:', error));
