require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/listActivitiesSchema.graphql");
const resolvers = require("./resolvers/listActivitiesResolver");


const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.start().then(() => {
  server.applyMiddleware({ app });

  
  app.get("/", (req, res) => {
    res.send("List activities microservice is running");
  });


  app.listen(4003, () => {
    console.log("Servidor corriendo en http://localhost:4003/graphql");
  });
});
