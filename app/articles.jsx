
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state= {
			article: articles[0],
			articles: articles
		}
	}

	onclickItem (article) {
		this.setState({
			article: articles[0]
		});
		console.log(articles[0].name)
	}

	render () {
		return(
			<div>
			<h1 className = 'header'><center>Articles Factory</center></h1>
			<div className="CategoryList">
			<CategoryList onclickItem = {this.onclickItem.bind(this)} articles={this.state.articles}/>
			</div>
			</div>
			)}
	}

ReactDOM.render(<App />, document.getElementById('app'));


