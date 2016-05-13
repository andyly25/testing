var express = require('express');
var morgan = require('morgan');
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
// interpretation of total path is node express folder + public folder
// gives flexibility to run app wherever you want.
app.use(express.static(__dirname+'/public'));

// this is a shortcut compared to server-1.js
app.listen(port, hostname, function(){
	console.log('Server running at http://'+hostname+":"+port+"/");
});

//when running, Morgan will log into the console side 