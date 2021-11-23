const userResolvers = require('./user');

const resolvers = {
	Query: {
		check: userResolvers.check,
		user: (_, data) => {
			return userResolvers.user(data);
		},
		users: userResolvers.users,
		profileImage: userResolvers.profileImage,
		login: (_, data) => {
			return userResolvers.login(data);
		},
	},
	Mutation: {
		createUser: (_, data) => {
			return userResolvers.createUser(data);
		},
		uploadProfileImage: (_, { file }) => userResolvers.storeUpload(file),
	},
};

module.exports = resolvers;
