// Get a number of rows
exports.get = function(req, res) {
	
	// Get DB reference
	db = require('../db');
	
	// Run a query
	db.db.query('SELECT id FROM data WHERE filter=0 ORDER BY sort LIMIT 100', function(err, results) {
		res.send(JSON.stringify(results));
	});

};