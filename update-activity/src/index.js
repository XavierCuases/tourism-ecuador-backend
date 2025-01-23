const { ApolloServer } = require('apollo-server');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const typeDefs = mergeTypeDefs(loadFilesSync('./src/schema'));
const resolvers = mergeResolvers(loadFilesSync('./src/resolvers'));

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4004 }).then(({ url }) => {
  console.log(`Service running at ${url}`);
});
