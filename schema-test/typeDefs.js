const typeDefs = `
  type Query {
		name: String
		post: Post
  }
  
  type Post {
  	id: Int
		title: String
		body: String
		authorId: Int
		date: String
  }
`;

module.exports = typeDefs;
