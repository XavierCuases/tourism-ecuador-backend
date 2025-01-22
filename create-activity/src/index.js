require('graphql-import-node');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/activitySchema.graphql'); // Importa el archivo .graphql
const resolvers = require('./resolvers/createActivityResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Service running at ${url}`);
});
