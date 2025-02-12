const app = require('./src/app'); 
const sequelize = require('./src/config/database');  
const setupSwagger = require('./src/swagger'); 


setupSwagger(app);

sequelize.sync({ alter: true }) 
    .then(() => {
        console.log('Database synchronized');
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
            console.log(`Swagger3 UI is available at http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });
