const axios = require('axios');

const axiosGet = (url) => axios.get(url).then(response => response.data);
const axiosPost = (url, args) => axios.post(url, args).then(response => response.data);
const axiosPatch = (url, args) => axios.patch(url, args).then(response => response.data);
const axiosDelete = (url) => axios.delete(url).then(response => response.data);

const resolvers = {
	Query: {
		user: (parent, { id }, { config }, info) => axiosGet(`${config.REST_API_URL}users/${id}`),
		users: (parent, args, { config }, info) => axiosGet(`${config.REST_API_URL}users`),
		company: (parent, { id }, { config }, info) => axiosGet(`${config.REST_API_URL}companies/${id}`),
		companies: (parent, args, { config }, info) => axiosGet(`${config.REST_API_URL}companies`),
	},
	User: {
		company: ({ companyId }, args, { config }, info) => axiosGet(`${config.REST_API_URL}companies/${companyId}`),
	},
	Company: {
		users: ({ id }, args, { config }, info) => axiosGet(`${config.REST_API_URL}companies/${id}/users`),
	},
	Mutation: {
		createUser: (parent, { ...args }, { config }, info) => axiosPost(`${config.REST_API_URL}users`, { ...args }),
		updateUser: (parent, { id, ...args }, { config }, info) => axiosPatch(`${config.REST_API_URL}users/${id}`, args),
		deleteUser: (parent, { id }, { config }, info) => axiosDelete(`${config.REST_API_URL}users/${ id }`)
	}
};

module.exports = resolvers;
