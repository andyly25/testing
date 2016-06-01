var mongoose = require('mongoose');
var Category = require('./category');
var fx 		 = require('.fx');

// This schema represents what you will display on an individual product view
var productSchema = {
	// will not allow you to save without one of the 3
	name: {type: String, required: true},
	//pictures must start with http://
	pictures: [{type: String, match: /^http:\/\//i}],
	price:{
		amount: {
			type: Number, 
			required: true,
			//custom setters to perform certain operations every time
			// value of certain field is set
			set: function(v){
				this.internal.approximatePriceUSD = v/(fx()[this.price.currency]||1);
				return v;
			}
		},
		//only 3 supported currencies for now
		currency:{
			type: String,
			enum: ['USD','EUR', 'GBP'],
			required: true,

			set: function(v){
				// take provided price divided by exchange rate defined by fx function
				this.internal.approximatePriceUSD = 
					this.price.amount / (fx()[v] || 1);
				return v;
			}
		}
	},
	// important since want to query for products based on category's properties
	category: Category.categorySchema,
	// allows to keep product's price in sync with product price in USD
	internal: {
		approximatePriceUSD: Number
	}
};

var schema = new mongoose.Schema(productSchema);
// Human readable string form of price 
var currencySymbols = {
	'USD': '$',
	'EUR': '€',
	'GBP': '£'
};
schema.virtual('displayPrice').get(function(){
	return currencySymbols[this.price.currency]+ ' '+ this.price.amount;
});

schema.set('toObject', {virtuals:true});
schema.set('toJSON', {virtuals: true});

module.exports = schema;

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;