//More elegant way of implementing REST API format

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

//gives router obj supported by express
var gameRouter = express.Router();
gameRouter.use(bodyParser.json());
gameRouter.route('/')
//this time don't have to specify URI
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type':'text/plain'});
	next();
}) //note: no semicolon since chaining

.get(function(req,res, next){
	res.end('Will send your games to you!');
})

// interprets as wanting to add a new 'game', so body contain new game in json
.post(function(req,res, next){
	res.end('Will add the game: ' + req.body.name + ' with details: ' +
		req.body.description);
})

.delete(function(req, res, next){
	res.end('Deleting all games');
}); //note: semicolon since done chaining 


gameRouter.route('/:gameId')
//this time don't have to specify URI
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type':'text/plain'});
	next();
}) //note: no semicolon since chaining

.get(function(req, res, next){
	res.end("Will send details of game: "+ req.params.gameId + ' to you');
})

.put(function(req,res,next){
	res.write("Updating game " + req.params.gameId + "\n");
	res.end('WIll update game ' + req.body.name+ ' with details: ' + req.body.description);
})

.delete(function(req,res,next){
	res.end('Deleting game: '+ req.params.gameId);
});

//now to attach and use router
app.use('/games', gameRouter);

// interpretation of total path is node express folder + public folder
// gives flexibility to run app wherever you want.
app.use(express.static(__dirname+'/public'));

// this is a shortcut compared to server-1.js
app.listen(port, hostname, function(){
	console.log('Server running at http://'+hostname+":"+port+"/");
});

//when running, Morgan will log into the console side 