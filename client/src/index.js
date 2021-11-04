import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, gql } from '@apollo/client';
import { cache } from './cache';

const client = new ApolloClient({
	cache,
	uri: 'http://localhost:4000/graphql',
});
