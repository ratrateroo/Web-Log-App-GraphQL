const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const mongoose = require('mongoose');

const apolloserver = require('./apollo/apolloserver');
const createDirectory = require('./util/createDirectory');
const fileNameReader = require('./util/fileNameReader');
const isAuth = require('./middleware/is-auth');

//Server Definitions

const startServer = async () => {
	try {
		console.log('This is the server.');

		//Start Apollo Server
		await apolloserver.start();

		const app = express();
		//add middleware to the app
		app.use(graphqlUploadExpress());
		app.use(isAuth);
		apolloserver.applyMiddleware({ app });
		//Create images forlder
		await createDirectory('images');
		//serve public folder for path starting with /freefiles
		app.use('/freefiles', express.static('public'));

		app.listen({ port: 4000 }, () => {
			console.log(
				`🚀  Server ready at http://localhost:4000/${apolloserver.graphqlPath}`
			);
		});

		fileNameReader();
	} catch (error) {
		console.log(error);
	}
};

//Starting the Server
console.log('Server Starting...');
startServer();
