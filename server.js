var express = require('express');
var app=express();

var port = 3000;


app.use(express.static(__dirname))
app.set('view engine', 'html');

app.get('/',function(req,res){
	res.render('index')
})

app.listen(process.env.PORT || port);
