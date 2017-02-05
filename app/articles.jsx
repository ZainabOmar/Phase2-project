// var CurrentArticle = (props) => (
// 	<div className="current">
// 	<div className="reading" src={props.articles.category.url}></div>
// 	<nav className="navbar">
// 	<h2><center>Home</center></h2>
// 	</nav>
// 	</div>
// 	)

// var CategoryListEntry = (props) => (
// <div className="category">
// <div className="article-title" onClick={() => props.onclickItem(props.article)}>
// {props.article.category.name}
// </div>
// </div>
// 	)


// var CategoryList = (props) => (
// 	<div className="categories">
// 	<h2>All Categories </h2>
// 	{props.articles.map (article => 
// 		<CategoryListEntry key = {article.category.name} article = {article} onclickItem = {props.onclickItem}/>
// 		)}
// 	</div>
// 	)

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state= {
			article: articles[0],
			articles: articles
		}
	}

	onclickItem (article) {
		console.log(article)
		this.setState({
			CurrentArticle: article
		});
	}

	render () {
		return(
			<div>
			<h1><center>Articles Factory</center></h1>
			<div className="current-article">
				<CurrentArticle article={this.state.article}/>
			</div>
			<div className="CategoryList">
			
				<CategoryList onclickItem = {this.onclickItem.bind(this)} articles={this.state.articles}/>
			</div>
			</div>
			)}
	}
	console.log(articles[0].category.name)
	ReactDOM.render(<App />, document.getElementById('app'));


