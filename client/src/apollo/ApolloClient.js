import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloLink,
	concat,
} from '@apollo/client';

// import { createUploadLink } from 'apollo-upload-client';

// const httpLink = createUploadLink({
// 	uri: 'http://localhost:8000/graphql',
// });

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext(
		({
			headers = {
				'Content-Type': 'application/json',
			},
		}) => ({
			headers: {
				...headers,
				authorization: localStorage.getItem('token') || null,
			},
		})
	);

	return forward(operation);
});

// const client = new ApolloClient({
// 	link: httpLink,
// 	cache: new InMemoryCache(),
// });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: concat(authMiddleware, httpLink),
});

export default client;
