var CategoryList = (props) => (

	<div className="categories">
	<h2>All Categories </h2>
	{props.articles.map (article => 
		<CategoryListEntry key = {article.name} article = {article} onclickItem = {props.onclickItem}/>
		)}
	</div>
	)
CategoryList.propTypes = {
	articles: React.PropTypes.array.isRequired
};
