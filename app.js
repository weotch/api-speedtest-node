// Requirements
var express = require('express');

// Setup web server
var app = express(),
	port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

// Enable routing
var routes = require('./routes');
routes.register(app);