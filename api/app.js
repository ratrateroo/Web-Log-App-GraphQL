require('dotenv').config();
const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apolloserver = require('./apollo/apolloserver');
const createDirectory = require('./util/createDirectory');
const fileNameReader = require('./util/fileNameReader');
const isAuth = require('./middleware/is-auth');
const logReqRes = require('./util/logReqRes');

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

		//app.use(express.urlencoded());
		app.use(express.json());

		app.use((req, res, next) => {
			console.log('Body ' + req.body);
			next();
		});

		app.use('/graphql', (req, res, next) => {
			console.log(req.body.query);
			console.log(req.body.variables);
			console.log(res.data);
			return next();
		});

		//app.use(logReqRes);

		//add middleware to the app
		app.use(graphqlUploadExpress());
		app.use(isAuth);
		apolloserver.applyMiddleware({ app });
		//Create images forlder
		await createDirectory('images');
		//serve public folder for path starting with /freefiles
		app.use('/freefiles', express.static('public'));
		const port = process.env.PORT || 4000;
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
