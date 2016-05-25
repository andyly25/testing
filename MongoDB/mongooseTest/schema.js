var mongoose = require('mongoose');

// suppose want user doc have 3 fields
// a name, an email address, and number times logged in
module.exports = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	// email type string, but also must match expression
	email: {
		type: String,
		required: true,
		match: /.+@.+\..+/,
		lowercase: true
	},
	loggedInCount: {
		type: Number,
		default: 0
	}
});

// in order to use schema you need make Mongoose cnnect to MongoDB