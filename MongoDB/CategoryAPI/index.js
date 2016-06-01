//running point for running your web app

var express = require('express');
var wagner 	= require('wagner-core');

require('./models')(wagner);

var app = express();

// to bootstrap the app, uses api.js file
// using for Express subrouter functionality
app.use('/api/v1', require('./api')(wagner));

// then starts http server on port 3k
app.listen(3000);
console.log('Listening on port 3000!');