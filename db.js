// https://github.com/felixge/node-mysql

// Connect to DB
var mysql      = require('mysql');
var connection = mysql.createConnection({
  // host     : process.env.MYSQL_HOST || 'localho',
  port : '/Applications/MAMP/tmp/mysql/mysql.sock',
  database : process.env.MYSQL_DB || 'api_speedtest',
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS
});

// Expose the DB connection
connection.connect(function(err) { console.log('connect', err)});
exports.db = connection;