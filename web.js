var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var indexBuffer = fs.readFileSync('index.html');
    var page = indexBuffer.toString();
    response.send( page );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
