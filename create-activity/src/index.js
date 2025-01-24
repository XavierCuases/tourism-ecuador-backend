require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const configureSwagger = require("./swagger");
const typeDefs = require("./schema/activitySchema.graphql");
const resolvers = require("./resolvers/createActivityResolver");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  configureSwagger(app);

  app.get("/", (req, res) => {
    res.send("Activity creation the microservice is running");
  });

  app.listen(4001, () => {
    console.log("Server running on http://localhost:4001/graphql");
    console.log("Swagger available in http://localhost:4001/api-docs");
  });
});
