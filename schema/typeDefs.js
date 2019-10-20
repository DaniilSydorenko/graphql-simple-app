const typeDefs = `
  type Query {
    user(id: ID!): User
    users: [User]
    company(id: ID!): Company
    companies: [Company]
  }

  type User {
 		id: ID
    name: String
    email: String
    username: String
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Address {
  	street: String
  	suite: String
  	city: String
  	zipcode: String
  }
  
  input AddressInput {
  	street: String
  	suite: String
  	city: String
  	zipcode: String
  }
  
  type Company {
		id: ID!
		name: String
		description: String
		catchPhrase: String
		users: [User]
  }
  
  type Mutation {
		createUser(
			name: String!
			email: String!
			username: String
			address: AddressInput
			phone: String
			website: String
			companyId: ID
  	): User
  	
		updateUser(
			id: ID!
			name: String!
			email: String!
			username: String
			address: AddressInput
			phone: String
			website: String
			companyId: ID
		): User
		
		deleteUser(
			id: ID!
		): User
	}
`;

module.exports = typeDefs;
