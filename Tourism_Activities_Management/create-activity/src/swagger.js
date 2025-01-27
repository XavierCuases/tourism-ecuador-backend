const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Microservice - Create Activity",
      version: "1.0.0",
      description: "API to manage the creation of activities",
    },
    servers: [
      {
        url: "http://localhost:4001", 
      },
    ],
  },
  apis: ["./src/resolvers/*.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
