const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const config = require('./config.js');

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: {
		config
	},
	resolverValidationOptions :{
		requireResolversForResolveType: false
	},
})

server.start(
	() => console.log('Server is running on localhost:4000☄')
);
