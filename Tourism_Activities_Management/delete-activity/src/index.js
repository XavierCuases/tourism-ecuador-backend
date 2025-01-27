require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/deleteActivitySchema.graphql");
const resolvers = require("./resolvers/deleteActivityResolver");


const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.start().then(() => {
  server.applyMiddleware({ app });

  
  app.get("/", (req, res) => {
    res.send("Delete activities microservice is running");
  });


  app.listen(4005, () => {
    console.log("Servidor corriendo en http://localhost:4005/graphql");
  });
});
