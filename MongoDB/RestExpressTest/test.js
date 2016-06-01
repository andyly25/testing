/*
 * This is a mocha test code
 * superagent is a popular node.js HTTP client
 * used to make HTTP requests
 */
var app = require('./server');
var assert = require('assert');
var superagent = require('superagent');

describe('server', function(){
	var server;
	// before test starts you create new server using call to server.js
	// then you listen on port 3000
	beforeEach(function(){
		server = app().listen(3000);
	});

	afterEach(function(){
		server.close();
	});
	/*
		then your test makes an HTTP request to localhost 3000
		See the function done at end? Since Mocha supports asynchronous tests,
		mocha inspects parameters of function passed to it function.
		if fn takes arg, Mocha assumes test is asynchronous and calls done 
		telling Mocha test is completed
	 */
	

	it('prints out "Hello WOrld!" when user goes to /', function(done){
		// superagent expose this nice .get function, used to make
		// http request with verb to get to localhost 3000 and get 
		// response back to this res parameter
		superagent.get('http://localhost:3000/', function(error, res){
			assert.ifError(error);
			// asserts on http response status, 200 means successful
			// express returns 200 by default
			assert.equal(res.status, 200);
			//once gets test back, asserts you got back the text
			assert.equal(res.text, "Hello WOrld!");
			done();
		});
	});
})

// now run npm test to test
// Yay, now you have ability to start http server and test it