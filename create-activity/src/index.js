require('graphql-import-node');
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/activitySchema.graphql");
const resolvers = require("./resolvers/createActivityResolver");


const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.start().then(() => {
  server.applyMiddleware({ app });

  
  app.get("/", (req, res) => {
    res.send("Activity creation microservice is running");
  });


  app.listen(4001, () => {
    console.log("Servidor corriendo en http://localhost:4001/graphql");
  });
});
