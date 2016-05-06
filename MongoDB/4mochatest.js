//requires add mocha into dependencies and npm install
/* 
 * mocha uses behavior driven development (BDD)
 * uses describe and it functions in place of junit suites and tests
 * does not come with own assertion framework
 * built in nodejs assert module is used here instead
 * Mocha has ability to use different reporters to format test results
 */

//How to test: use ./node_modules/.bin/mocha 4mochatest.js

//running: ./node_modules/.bin/mocha -g "fail" 4mochatest.js
//only runs this it 'fails gracefully' test

//using: ./node_modules/.bin/mocha -R dot 4mochatest.js
//uses the dot reporter which is handy when thousands of tests

//xunit reporter outputs in XML format

//nyan reporter outputs a happy ascii kitty when all tests works

var assert = require('assert');

describe('my feature', function(){
	it('works', function(){
		assert.equal('A','A');
	});

	it('fails gracefully', function(){
		assert.throws(function(){
			throw 'Error!';
		});
	});
});

describe('my other feature', function(){
	it('async', function(done){
		setTimeout(function(){
			done();
		}, 25);
	});
});