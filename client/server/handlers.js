var api = "https://www.reddit.com/r/Articles.json";
var fetch = require('node-fetch');
var counter = 0;
module.exports = {

	getAllArticles:function(req, res){
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var data = data.data.children;
			var result = {};
			for (var i = 0; i < data.length; i++) {
				result[i]={};
				result[i]['title'] = data[i]['data']['title'];
				result[i]['author'] = data[i]['data']['author'];
				result[i]['url'] = data[i]['data']['url'];
				result[i]['score'] = data[i]['data']['score'];
				result[i]['description'] = data[i]['data']['selftext'];
			}
			res.send(data, result)
		})
		.catch(err => console.error(err));
	}


}