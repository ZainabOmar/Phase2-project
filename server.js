var express = require('express');
var app=express();

app.listen(3000, function() {
  console.log('articles is listening on 3000');
});

app.use(express.static(__dirname))
app.set('view engine', 'html');

app.get('/',function(req,res){
	res.render('index')
})


// app.get('/',function(req,res){
// 	res.render('')
// })