require('graphql-import-node');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./database/mongoDBClient');
const typeDefs = require('./schema/deleteActivitySchema.graphql');
const resolvers = require('./resolvers/deleteActivityResolver');
const configureSwagger = require('./swagger'); 

const app = express();

connectDB();


configureSwagger(app); 

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  // Default route for health check
  app.get('/', (req, res) => {
    res.send('Delete activities microservice is running');
  });

  const PORT = process.env.PORT || 4005;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  });
});
