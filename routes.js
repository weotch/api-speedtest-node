exports.register = function(app) {

	// Show.  Select a random row.

	// Insert.  Create a row with random data

	// Update.  Update a row.

	// Index.  List a number of rows
	app.get('/', function(req, res){
		var index = require('./controllers/index');
		index.get(req, res);
	});
	
};

