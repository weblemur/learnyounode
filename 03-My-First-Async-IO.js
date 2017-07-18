var fs = require('fs');
var file = '';

fs.readFile(process.argv[2], function(err, data) {
  if (err) throw err;
  file = data.toString();
  console.log(file.split('\n').length - 1);
});
