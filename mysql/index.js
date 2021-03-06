var mysql = require('mysql');
var config = require('../config');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : config.mysqlPassword,
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
