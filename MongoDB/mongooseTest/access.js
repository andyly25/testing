var mongoose = require('mongoose');
var productSchema = require('./user');

var User = mongoose.model('User', productSchema);

var u = new User({
	profile: {username: 'bobby25'}
});

modifyUserProfile(u, {
	picture: 'http://images.freeimages.com/images/previews/8d4/anemone-1372191.jpg'
});

// modifyUserData can **only** modify
// user.profile, not user.data
function modifyUserProfile(user, profile, callback){
	user.profile = profile;
	user.save(function(error,user){
		//handles the result
	});
}