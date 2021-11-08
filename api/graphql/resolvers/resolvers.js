const userResolvers = require('./user');

const resolvers = {
	Query: {
		user: userResolvers.user,
		users: userResolvers.users,
		login: (_, data) => {
			return userResolvers.login(data);
		},
	},
	Mutation: {
		createUser: (_, data) => {
			return userResolvers.createUser(data);
		},
	},
};

module.exports = resolvers;
