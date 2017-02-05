var CurrentArticle = (props) => (
	<div className="current">
	<div className="reading" src={props.article.category.url}></div>
	<nav className="navbar">
	<h2><center>Home</center></h2>
	</nav>
	</div>
	)
CurrentArticle.propTypes = {
  article: React.PropTypes.array.isRequired
};

window.CurrentArticle = CurrentArticle;
