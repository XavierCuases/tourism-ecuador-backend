require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/updateActivitySchema.graphql");
const resolvers = require("./resolvers/updateActivityResolver");


const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.start().then(() => {
  server.applyMiddleware({ app });

  
  app.get("/", (req, res) => {
    res.send("Update activities microservice is running");
  });


  app.listen(4004, () => {
    console.log("Servidor corriendo en http://localhost:4004/graphql");
  });
});
