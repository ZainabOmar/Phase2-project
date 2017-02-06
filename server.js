var express = require('express');
var engines = require('engines');
var app=express();

app.set('port', (process.env.PORT || 3000));
console.log(__dirname+'/app')
app.use(express.static(__dirname))
app.set('view engine', 'html');

app.get('/',function(req,res){
	res.render('index')
})

app.set('view engine', 'jsx');

app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
