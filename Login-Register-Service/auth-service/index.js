const app = require('./src/app'); 
const sequelize = require('./src/config/database');  


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
