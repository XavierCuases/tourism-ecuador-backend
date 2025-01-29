require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const configureSwagger = require("./swagger");
const typeDefs = require("./schema/activitySchema.graphql");
const resolvers = require("./resolvers/createActivityResolver");
const connectDB = require("./database/mongoDBclient");
require("dotenv").config();

const app = express();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
 
  server.applyMiddleware({ app });

  configureSwagger(app);


  app.get("/", (req, res) => {
    res.send("Activity creation microservice is running");
  });

  const PORT = process.env.PORT || 4001;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
    console.log(`📄 Swagger available at http://localhost:${PORT}/api-docs`);
  });
});
