var mongodb = require('mongodb')

var uri = 'mongodb://localhost:27017/example';
//connect allows connection to MongoDB
//callbacks are functions you provide to nodejs driver to specify what
//a given operation do once complete
mongodb.MongoClient.connect(uri, function(error,db){
	if(error){
		console.log(error);
		process.exit(1);
	}

	//this is a JSON obejct
	var doc = {
		title: 'Jaws',
		year: 1975,
		director: 'Steven Spielsberg',
		rating: 'PG',
		//allows store queries for nested JSON array
		//uses nested document
		ratings:{
			critics: 80,
			audience: 97
		},
		//using array field
		screenplay: ['Peter Benchley', 'Carl Gotlieb']
	};

	//puts the above into a collection called movies
	db.collection('movies').insert(doc, function(error,result){
		if(error){
			console.log(error);
			process.exit(1);
		}

		// var query = {year: 1975, rating....., ....};
		//if you added this in to find
		// -----.find(query)--- it will look through all movies with year 1975 and etc

		//still finds the movie even with one of elements
		// find({screenplay: 'Peter Benchley'}).

		//want to find audience ratings 90% or greater
		// find( {'ratings.audience':{'$gte':90}} ).

		//find is how you execute a query in MongoDB, if use NodeJS driver need use
		//.toArray allows you to work with ... an array of docs rather iterate through cursors
		db.collection('movies').find({'ratings.audience':{'$gte':90}}).toArray(function(error, docs){
			if(error){
				console.log(error);
				process.exit(1);
			}

			//Queries structured as JSON obj. MongoDB uses a query by example approach
			console.log('Found docs:');
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		});
	});
});