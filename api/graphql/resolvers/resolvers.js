const userResolvers = require('./user');

const resolvers = {
	Query: {
		user: userResolvers.user,
		users: userResolvers.users,
		login: userResolvers.login,
	},
	Mutation: {
		createUser: userResolvers.createUser,
	},
};

module.exports = resolvers;
