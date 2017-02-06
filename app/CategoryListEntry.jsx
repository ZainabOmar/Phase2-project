var CategoryListEntry = (props) => (
	<div className="category">
	<div className="article-title" >
	<h2>{props.article.name}</h2>
	</div>
	<ul className = 'title'>
	<li><a href = {props.article.author1.url1} onClick={() => props.onclickItem(props.article)}>{props.article.author1.title1}</a></li>
	<li><a href = {props.article.author2.url2} onClick={() => props.onclickItem(props.article)}>{props.article.author2.title2}</a></li>
	<li><a href = {props.article.author3.url3} onClick={() => props.onclickItem(props.article)}>{props.article.author3.title3}</a></li>
	</ul>
	</div>
	)
CategoryListEntry.propTypes = {
	article: React.PropTypes.object.isRequired
};
