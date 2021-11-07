const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const mongoose = require('mongoose');

const apolloserver = require('./apollo/apolloserver');
const createDirectory = require('./util/createDirectory');
const fileNameReader = require('./util/fileNameReader');
const isAuth = require('./middleware/is-auth');

//Server Definitions

const startServer = async () => {};

//Starting the Server
console.log('Server Starting...');
startServer();
