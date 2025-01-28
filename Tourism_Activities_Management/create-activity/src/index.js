require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const configureSwagger = require("./swagger");
const typeDefs = require("./schema/activitySchema.graphql");
const resolvers = require("./resolvers/createActivityResolver");
const connectDB = require("./database/mongoDBclient"); // MongoDB connection file
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  // Apply Apollo Server middleware to the Express app
  server.applyMiddleware({ app });

  // Configure Swagger for API documentation
  configureSwagger(app);

  // Base route for health check
  app.get("/", (req, res) => {
    res.send("Activity creation microservice is running");
  });

  // Use PORT from environment variables or default to 4001
  const PORT = process.env.PORT || 4001;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
    console.log(`📄 Swagger available at http://localhost:${PORT}/api-docs`);
  });
});
