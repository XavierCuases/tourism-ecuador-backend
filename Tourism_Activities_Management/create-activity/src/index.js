require('graphql-import-node');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./database/mongoDBClient'); 
const typeDefs = require('./schema/activitySchema.graphql');
const resolvers = require('./resolvers/createActivityResolver');
const configureSwagger = require('./swagger'); 
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
    res.send('The Create activities microservice is running 1');
  });

  const PORT = process.env.PORT || 4001;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  });
});
