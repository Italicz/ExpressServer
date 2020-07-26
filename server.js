var express = require('express'); //Used for routing
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app); //Used to provite the HTTP functionality
var path = require('path');
require('./routes/accountroute.js')(app,path);
require('./routes/loginroute.js')(app,path);

app.use (bodyParser.json());
app.use(express.static(__dirname +'/www'));

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port:" + port);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/www/index.html");
})

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
})

app.post('/login', function (req, res){
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    if (req.body.email == "james@angier.co.uk" && req.body.password == "abc123"){
        customer.valid = true;
    } else if (req.body.email == "david@angier.co.uk" && req.body.password == "123abc"){
        customer.valid = true;
    } else if (req.body.email == "james.angier@griffithuni.edu.au" && req.body.password == "123"){
        customer.valid = true;
    } else {
        customer.valid = false;
    }
    res.send(customer);
})