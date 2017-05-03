var express = require('express');
var app = express();

var PORT = process.env.port || 8080;

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
})