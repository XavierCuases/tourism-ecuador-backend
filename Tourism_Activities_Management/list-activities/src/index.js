require("graphql-import-node");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const morgan = require("morgan");
const configureSwagger = require("./swagger");
const typeDefs = require("./schema/listActivitiesSchema.graphql");
const resolvers = require("./resolvers/listActivitiesResolver"); 

const app = express();

app.use(cors());

//app.use(morgan("dev"));

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

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  const PORT = process.env.PORT || 4003;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
    console.log(`Swagger available at http://localhost:${PORT}/api-docs`);
  });
});
