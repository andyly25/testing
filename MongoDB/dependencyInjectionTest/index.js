/*
 * Key principle of dependency injection is to separate construction and initialization
 * of dependencies from code that uses these dependencies
 * In this example, instead using mongoose model directly, we take it as a parameter
 * Since fns dependencies are all parameters, easy to refactor whole function into separate file
 * and reinstrument the dependencies
 * If you want to use separate db for tests, you just need to change way you initialize user model
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
var userSchema = new mongoose.Schema({
	name: String
});

var User = mongoose.model('User', userSchema);

// sounds good in theory but what if you want to add parameters to your fns
// now every place that calls myUserFunction needs add a new param to fn to call
// this gets tiring fast, this why you would use a framework to do it for you
myUserFunction(User);

function myUserFunction(User){
	User.create({name: 'John'}, function(error, doc){
		console.log(require('util').inspect(doc));
	});
}