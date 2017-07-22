// Created for and used by 05-Modular.js

var fs = require('fs');
var path = require('path');

module.exports = function(pathName, ext, callback) {
  fs.readdir(pathName, function(err, files) {
    if (err) return callback(err);
    callback(null, files.filter(function(file) { return path.extname(file) === '.' + ext; }));
  });
};
