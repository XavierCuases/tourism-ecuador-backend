const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'User Management API-Delete User',
            description: 'This API is part of the **Tourism Ecuador** platform. It handles user management functionalities, including listing, creating, updating, and deleting users in the system.',
            version: '1.0.0',
        },
        host: 'localhost:7002',  
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
