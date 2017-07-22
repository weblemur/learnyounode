var filter = require('./file-filter');
var pathName = process.argv[2];
var ext = process.argv[3];

filter(pathName, ext, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) { console.log(file); });
});
