const axios = require('axios');

const post = {
	id: 12,
	title: 'Test',
	body: 'Test content',
	authorId: 4,
	date: '2019/09/12'
}

const resolvers = {
	Query: {
		name: () => 'Daniil',
		post: () => post
	}
};

module.exports = resolvers;
