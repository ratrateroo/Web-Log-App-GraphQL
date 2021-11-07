const userResolvers = require('./user');

const resolvers = {
	Query: {
		user: userResolvers.user,
		users: userResolvers.users,
		login: userResolvers.login,
	},
	Mutations: {
		createUser: userResolvers.createUser,
	},
};

module.exports = resolvers;
