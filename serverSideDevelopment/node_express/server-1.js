var express = require('express'),
	http = require('http');
var hostname = 'localhost';
var port = 3000;

var app = express();

// app.use specifies a function that will be applied to req message
// and transform that and construct corresponding response message
app.use(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<html><body><h1>Hellow World</h1></body></html>');
});
//create server then listens 
var server = http.createServer(app);
server.listen(port, hostname, function(){
	console.log('Server running at http://'+hostname+":"+port+"/");
});