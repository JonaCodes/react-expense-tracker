var express = require('express');
var app = express();

app.use("/node_modules", express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(3467)