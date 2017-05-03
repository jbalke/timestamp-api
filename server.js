var express = require('express');
var app = express();

var PORT = process.env.port || 3000;

app.get('/', function(request, response) {
  response.send('Please  provide a timestamp as a path parameter.')
});

app.get('/:timestamp', function(request, response) {
  var timestamp = request.params.timestamp;

  response.send(formatTimeStampJSON(timestamp));
});

app.listen(PORT, function () {
  console.log('Timestamp API listening on port ' + PORT);
})

function formatTimeStampJSON(timestamp) {
  var result = {
    unix: null,
    natural: null
  }

  var date;
  var options = {year: 'numeric', month: 'long', day: 'numeric'}

  if (!isNaN(parseInt(timestamp))) {
    date = new Date(parseInt(timestamp));
  } else {
    date = new Date(timestamp);
  }

  if (!isNaN(date.getTime())) {
    result.unix = date.getTime();
    result.natural = date.toLocaleString(undefined, options);
  }

  return result;
};