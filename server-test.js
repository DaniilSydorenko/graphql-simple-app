const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require("./schema-test/typeDefs");
const resolvers = require("./schema-test/resolvers");

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: {}
})

server.start(
	() => console.log('Server-Test is running on localhost:4000☄')
);
