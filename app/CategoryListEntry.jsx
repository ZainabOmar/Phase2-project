var CategoryListEntry = (props) => (
	<div className="category">
	<div className="article-title" onClick={() => props.onclickItem(props.article)}>
	{props.article.category.name}
	</div>
	</div>
)
CategoryListEntry.propTypes = {
	article: React.PropTypes.object.isRequired
};


window.CategoryListEntry = CategoryListEntry;