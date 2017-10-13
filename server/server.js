var express = require('express');
var app = express();
var port = process.env.PORT || 4200;
var Articles = require('./handlers.js')

require('./middleware.js')(app, express);

app.use('/api/articles', Articles.getAllArticles)

app.listen(port, function() {
	console.log("App is running on port " + port);
});