const path = require('path');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerYaml = yaml.load(path.join(__dirname, './docs/swagger.yml'));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Update Activity API',
      version: '1.0.0',
      description: 'API for updating activities using GraphQL and MongoDB',
    },
    servers: [
      {
        url: 'http://localhost:4004',
        description: 'Local development server',
      },
    ],
  },
  apis: ['./src/schema/*.graphql'], 
};

const swaggerJSDocSpec = swaggerJSDoc(swaggerOptions);

const swaggerSpec = {
  ...swaggerJSDocSpec,
  paths: {
    ...swaggerYaml.paths, 
  },
};

function configureSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = configureSwagger;
