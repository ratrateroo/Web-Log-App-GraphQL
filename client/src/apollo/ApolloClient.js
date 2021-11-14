import { ApolloClient, InMemoryCache } from '@apollo/client';

import { createUploadLink } from 'apollo-upload-client';

import { setContext } from '@apollo/client/link/context';

import { AuthContext } from '../shared/auth/AuthContext';

import forAuthToken from './forAuthToken';

const httpLink = createUploadLink({
	uri: 'http://localhost:8000/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	//const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${forAuthToken}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
