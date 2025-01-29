require('graphql-import-node');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./database/mongoDBClient'); 
const typeDefs = require('./schema/updateActivitySchema.graphql');
const resolvers = require('./resolvers/updateActivityResolver');
const configureSwagger = require('./swagger'); 
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

configureSwagger(app);


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Update activities microservice is running');
  });

  
  const PORT = process.env.PORT || 4004;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  });
});
