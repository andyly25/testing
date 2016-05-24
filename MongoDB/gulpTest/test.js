// ./node_modules/.bin/gulp test.js
// or add into pakage.json "watch": "gulp watch"

var assert = require('assert');

describe('my feature', function(){
	it('works', function(){
		assert.equal('A', 'A');
	});
	it('fails gracefuly', function(){
		assert.throws(function(){
			// wow whole time I used throws and wondered why not working
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
