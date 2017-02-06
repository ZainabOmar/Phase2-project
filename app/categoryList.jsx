var CategoryList = (props) => (
	<div className="categories">
	<h2 className = 'head'>All Categories </h2>
	{props.articles.map (article => 
		<CategoryListEntry  key = {article.id}
		article = {article} onclickItem = {props.onclickItem}/>
		)}
	</div>
	)

CategoryList.propTypes = {
	articles: React.PropTypes.array.isRequired
};
