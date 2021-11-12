const userResolvers = require('./user');

const resolvers = {
	Query: {
		check: userResolvers.check,
		user: (_, data) => {
			return userResolvers.user(data);
		},
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
