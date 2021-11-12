import { ApolloClient, InMemoryCache } from '@apollo/client';

import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({
	uri: 'http://localhost:8000/graphql',
});

console.log(link);

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
});

export default client;
