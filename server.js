var express = require('express'); //Used for routing
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();
var http = require('http').Server(app); //Used to provite the HTTP functionality
var path = require('path');
require('./routes/accountroute.js')(app,path);
require('./routes/loginroute.js')(app,path);

app.use(express.static(__dirname +'/www'));

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port:" + port);
})

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
})