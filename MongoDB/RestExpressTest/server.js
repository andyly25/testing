/*
 * NPM package we are using to start HTTP server is Express
 * Express provides routing and other high level abstractions
 * indispensible for modern web development
 */

//How you access Express module
var express = require('express');

/*
 * We can no attach routes to the app
 * routing is term to tell Express which code to run for which
 * types oof HTTP requests
 */
module.exports = function(){
	var app = express();
	//We do a get on the slash route
	app.get('/', function(req, res){
		// returns a page with Hello World
		res.send('HeLlO wOrLd!');
	});

	// the colon in route delimits a so called route parameter
	app.get('/user/:user', function(req, res){
		// req.params.user gives access to whatever string is in this colon user portion of URL
		// req.query.option contains key value pairs representing URL's query string
		// if you do /user/MongoDB?option=test
		// outputs has user MongoDB and option test, useful for testing
		res.send('Page for user '+ req.params.user + ' with option '+
			req.query.option);
	});
	return app;
};