const path = require('path');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');

// Carga el archivo YAML de Swagger
const swaggerDocument = yaml.load(path.join(__dirname, './docs/swagger.yml'));

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
