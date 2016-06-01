// this is what index.js uses to bootstrap mongoose models
// handles everything you need to set up Mongoose and category model

var mongoose = require('mongoose');

module.exports = function(wagner){
	//connects to a mondodb
	mongoose.connect('mongodb://localhost:27017/test');
	//creates a mongoose model by including the schema
	var Category = mongoose.model('Category', require('./category'), 'categories');
	// create ne product model
	var Product = mongoose.model('Product', require('./product'), 'products');

	var models = {
		Category:Category,
		Product: Product
	};
	//to ensure DRY-ness, register factories in a loop
	_.each(models, function(value,key){
		wagner.factory(key, function(){
		return value;
		});
	})

	// //registers the category service with wagner 
	// wagner.factory('Category', function(){
	// 	return Category;
	// });

	// return{
	// 	Category: Category
	// };
};