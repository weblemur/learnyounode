var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(concatStream(function(data) {
    var dataStr = data.toString();
    console.log(dataStr.length);
    console.log(dataStr);
  }));
  response.on('error', console.error);
}).on('error', console.error);
