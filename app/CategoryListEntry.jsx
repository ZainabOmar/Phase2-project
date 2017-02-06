var CategoryListEntry = (props) => (
	<div className="category">
	<div className="article-title" onClick={() => props.onclickItem(props.article)}>
		{props.article.category[0].name}
	</div>
		<ul>
		{props.article.category.map(article => 
			<li>{article.title}</li>
		)}
		</ul>
		</div>
)
CategoryListEntry.propTypes = {
	article: React.PropTypes.array.isRequired
};
