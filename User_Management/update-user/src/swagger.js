const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'User Management-Update Users',
            description: 'API for managing users in the Tourism Ecuador platform',
            version: '1.0.0',
        },
        host: 'localhost:7001',  
        basePath: '/api',
        schemes: ['http'],
    },
    apis: [path.join(__dirname, './docs/swagger.yml')], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
