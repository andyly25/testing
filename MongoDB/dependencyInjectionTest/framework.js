/*
 * we are using Wagner, has rich feature set that goes well beyond dependency injection
 * It lets you register named factories which are functions that return values
 * The values are known as services
 */

var express = require('express');
var mongoose = require('mongoose');
var wagner = require('wagner-core');

setupModels(mongoose, wagner);

var app = express();

setupApp(app, wagner);

app.listen(3000);
console.log('Listening on port 3000!');

function setupModels(mongoose, wagner){
	mongoose.connect('mongodb://localhost:27017/test');

	var userSchema = new mongooseSchema({
		name: String
	});

	var User = mongoose.model('User', userSchema);

	//In this case we register a service called User which correspond to my User model
	wagner.factory('User', function(){
		return User;
	});
}

function setupApp(app, wagner){
	/*
	 * Has a handy invoke function which takes a function and executes it
	 * It also inspects fns param list and pulls in services services that matches parameter names
	 * takes in a single param User, and Wagner looks for service named that and calls function
	 */
	var routeHandler = wagner.invoke(function(User){
		// returns a separate function that is an Express route handler
		return function(req, res){
			User.findOne({_id: req.params.id}, function(error, user){
				res.json({user: user});
			});
		};
	});
	// you pass the handler into the app.get function
	// known as closure since route handler closes over this User model
	// this way Express route handler can use Mongoose models w/o having worry
	// about setting them up or pulling from any global state
	app.get('/user/:id', routeHandler);
}