var express = require('express');
var path = require('path');

var app = express();

app.use('/',express.static(path.join(__dirname, 'www')));

port = 3000;
console.log("listening on port " + port);
app.listen(port);
