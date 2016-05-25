var mongoose= require('mongoose');
// this user schema dfeinds the data that you'll store for individual users
module.exports = new mongoose.Schema({
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		picture:{
			type: String,
			required: true,
			match: /^http:\/\//i
		}
	},
	// User and product have a many to many relationship
	// a product can be in many carts, and user can have multiple
	// items in the cart
	data:{
		oauth: {type: String, required: true},
		cart: [{
			product:{
				type: mongoose.Schema.Types.ObjectId
			},

		}]
	}
})

/*
Unlike SQL DBs, MongoDB doesn't have built-in notion of access control.
No way to tell only that user has access to these fields.
The ability to nest docs in other docs provides your app to implement access control.
*/