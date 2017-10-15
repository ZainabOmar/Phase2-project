var express = require('express');
var app = express();
var port = process.env.PORT || 4200;

require('./middleware.js')(app, express);

app.listen(port, function() {
	console.log("App is running on port " + port);
});