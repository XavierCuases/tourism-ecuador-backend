require('graphql-import-node');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./database/mongoDBClient');
const typeDefs = require('./schema/listActivitiesSchema.graphql');
const resolvers = require('./resolvers/listActivitiesResolver');
const configureSwagger = require('./swagger'); // Importar Swagger
require('dotenv').config();

const app = express();

connectDB();

configureSwagger(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('List activities microservice is running');
  });

  const PORT = process.env.PORT || 4003;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  });
});
