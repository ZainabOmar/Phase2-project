var bodyParser = require('body-parser');
var express = require ('express');

module.exports = function (app, express) {

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + './../build'));

};