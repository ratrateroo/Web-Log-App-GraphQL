const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const mongoose = require('mongoose');

const apolloserver = require('./apollo/apolloserver');
const createDirectory = require('./util/createDirectory');
const fileNameReader = require('./util/fileNameReader');
const isAuth = require('./middleware/is-auth');

const url = `mongodb://127.0.0.1:27017/${process.env.MONGO_DB}`;

//Server Definitions

const startServer = async () => {
	try {
		console.log('This is the server.');

		//connect to the database

		await mongoose
			.connect(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log('Connected 🚀 To MongoDB Successfully');
			});

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
		const port = 8000;
		app.listen({ port: port }, () => {
			console.log(
				`🚀  Server ready at http://localhost:${port}/${apolloserver.graphqlPath}`
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
