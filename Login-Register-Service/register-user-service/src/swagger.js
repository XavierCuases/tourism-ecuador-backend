const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'User Registration API',
      description: 'This API handles user registration for the Ecuador Turístico platform.',
      version: '1.0.0',
    },
    host: 'localhost:3000',
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
