var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

//informs app if body of incoming message is in JSON, parse anc voncert into JS Obj
// that can be used in requests
app.use(bodyParser.json());

//function will be executed as long as /games is there
app.all('/games', function(req,res,next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// allows parsing to continue one
	next();
});

app.get('/games', function(req,res, next){
	res.end('Will send your games to you!');
});

// interprets as wanting to add a new 'game', so body contain new game in json
app.post('/games', function(req,res, next){
	res.end('Will add the game: ' + req.body.name + ' with details: ' +
		req.body.description);
});

app.delete('/dishes', function(req, res, next){
	res.end('Deleting all games');
});

app.get('/games/:gameId', function(req, res, next){
	res.end("Will send details of game: "+ req.params.gameId + ' to you');
});

app.put('/games/gameId', function(req,res,next){
	res.write("Updating game " + req.params.gameId + "\n");
	res.end('WIll update game ' + req.body.name+ ' with details: ' + req.body.description);
});

app.delete('/games/gameId', function(req,res,next){
	res.end('Deleting game: '+ req.params.gameId);
});

// interpretation of total path is node express folder + public folder
// gives flexibility to run app wherever you want.
app.use(express.static(__dirname+'/public'));

// this is a shortcut compared to server-1.js
app.listen(port, hostname, function(){
	console.log('Server running at http://'+hostname+":"+port+"/");
});

//when running, Morgan will log into the console side 