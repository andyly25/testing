//once run, MongoDB inserts a document and then query to back

var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
/* MongoClient helps you create a connection to MongoDB
 * .connect function takes connection string which tells driver which 
 * MongoDB to connect to, and this is to the example db
 * It also takes a callback function (for errors or successful connection)
 */
mongodb.MongoClient.connect(uri, function(error, db){
	if (error){
		console.log(error);
		process.exit(1);
	}
	/* Once has a db handle, can then access collection function
	 * With collection, you can insert a document  
	 */
	db.collection('sample').insert({x:1}, function(error, result){
		if (error){
			console.log(error);
			process.exit(1);
		}
		/* Query for a document is trikeier since if yo pass call back to 
		 * driver's find cuntion, you'll get back a cursor rather than set of documents.
		 * cursor: object that you could call next on to get the next document
		 * the driver has the toarray function that exhausts cursor and
		 * returns an array of documents in the callback
		 */
		db.collection('sample').find().toArray(function(error,docs){
			if(error){
				console.log(error);
				process.exit(1);
			}

			console.log('Found docs:');
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc))
			});
			process.exit(0);
		});
	});
});