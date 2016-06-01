// this file responsible for executing funtion in sever.js
// it calles require to include function exported by server.js
// then execute server function to get back an Express app
var server = require('./server');

//listen binds express app to port 3000
server().listen(3000);
console.log('Server listening on port 3000!');