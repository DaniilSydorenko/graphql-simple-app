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
  	geo: Geo
  }
  
  type Geo {
  	lat: String
  	lng: String
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
			phone: String
			website: String
			companyId: ID
  	): User
  	
		updateUser(
			id: ID!
			name: String!
			email: String!
			username: String
			phone: String
			website: String
			companyId: ID
		): User
		
		deleteUser(
			id: ID!
		): User
	}
`;

// fragment userDetails on User {
// 	firstName
// 		age
// }
//
// fragment companyDetails on Company {
// 	id
// 		name
// 		description
// 		users {
// 	...userDetails
// 			company {
// 			name
// 		}
// 	}
// }
//
// query findCompany {
// 	firstCompany: company (id:"1") {
// 	...companyDetails
// 	}
// 	secondCompany:company (id:"2") {
// 	...companyDetails
// 	}
// }

module.exports = typeDefs;
