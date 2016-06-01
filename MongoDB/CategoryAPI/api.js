var express = require('express');
// http-status makes code easier to read since hard to remember the numbers sometimes.
var status 	= require('http-status');

module.exports = function(wagner){
	//creating a new express router
	var api = express.Router();

	api.get('/product/id/:id', wagner.invoke(function(product){
		return function(req,res){
			Product.findOne({_id:req.params.id},
				handleOne.bind(null,'product',res));
		};
	}));

	api.get('/product/category/:id', wagner.invoke(function(Product){
		return function(req, res){
			var sort = {name:1};
			if(req.query.price === "1"){
				sort={'internal.approximatePriceUSD':1};
			}else if(req.query.price === "-1"){
				sort = {'internal.approximatePriceUSD':-1};
			}

			Product.
				find({'category.ancestors': req.params.id}).
					sort(sort).
					exec(handleMany.bind(null, 'products', res));
		};
	}));

	//this first route loas categories by their underscore ID field
	api.get('/category/id/:id', wagner.invoke(function(Category){
		return function(req,res){
			Category.findOne({_id: req.params.id}, function(error,category){
				if(error){
					// if there's an error returns internal server error
					return res.
						status(status.INTERNAL_SERVER_ERROR).
						json({error: error.toString()});
						// returns error string as JSON
				}
				if(!category){
					//used instead of 404
					return res.
						status(status.NOT_FOUND).
						json({error: 'Not found'});
				}
				// if succeeded returns category as json
				res.json({category:category});
			});
		};
	}));

	//loads categories by their parent categories
	api.get('/category/parent/:id', wagner.invoke(function(Category){
		return function(req,res){
			// does a find on categories whose parent matches route param ID
			// and sorts by their id
			Category.
				find({parent: req.params.id}).
				sort({_id:1}).
				exec(function(error,categories){
					if(error){
						return res.
							status(status.INTERNAL_SERVER_ERROR).
							json({error:error.toString()});
					}
					res.json({categories:categories});
				});
		};
	}));
	// return express router at end so higher level apps can include router with app.use
	return api;
};

// defines generic rules for handling results to calls to model.findOne
function handleOne(property, res, error, result){
	if(error){
		return res.
			status(status.INTERNAL_SERVER_ERROR).
			json({error:error.toString()});
	}
	if(!result){
		return res.
			status(status.NOT_FOUND).
			json({error:'Not Fount'});
	}
	var json = ();
	json[property]=result;
	res.json(json);
}

// zzzz i give up, the professor keeps not showing the full example code
// when teaching, making parts of example incomplete
// also doesn't provide example code to download...
function handleMany(property, res, error, result){
	if(error){
		return res.
			status(status.INTERNAL_SERVER_ERROR).
			json({error:error.toString()});
	}
	if(!result){
		return res.
			status(status.NOT_FOUND).
			json({error:'Not Fount'});
	}
	var json = ();
	json[property]=result;
	res.json(json);
}