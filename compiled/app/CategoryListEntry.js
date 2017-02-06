"use strict";

var CategoryListEntry = function CategoryListEntry(props) {
	return React.createElement(
		"div",
		{ className: "category" },
		React.createElement(
			"div",
			{ className: "article-title" },
			React.createElement(
				"h2",
				null,
				props.article.name
			)
		),
		React.createElement(
			"ul",
			{ className: "title" },
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: props.article.author1.url1, onClick: function onClick() {
							return props.onclickItem(props.article);
						} },
					props.article.author1.title1
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: props.article.author2.url2, onClick: function onClick() {
							return props.onclickItem(props.article);
						} },
					props.article.author2.title2
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: props.article.author3.url3, onClick: function onClick() {
							return props.onclickItem(props.article);
						} },
					props.article.author3.title3
				)
			)
		)
	);
};
CategoryListEntry.propTypes = {
	article: React.PropTypes.object.isRequired
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9DYXRlZ29yeUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiQ2F0ZWdvcnlMaXN0RW50cnkiLCJwcm9wcyIsImFydGljbGUiLCJuYW1lIiwiYXV0aG9yMSIsInVybDEiLCJvbmNsaWNrSXRlbSIsInRpdGxlMSIsImF1dGhvcjIiLCJ1cmwyIiwidGl0bGUyIiwiYXV0aG9yMyIsInVybDMiLCJ0aXRsZTMiLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFFBQ3ZCO0FBQUE7QUFBQSxJQUFLLFdBQVUsVUFBZjtBQUNBO0FBQUE7QUFBQSxLQUFLLFdBQVUsZUFBZjtBQUNBO0FBQUE7QUFBQTtBQUFLQSxVQUFNQyxPQUFOLENBQWNDO0FBQW5CO0FBREEsR0FEQTtBQUlBO0FBQUE7QUFBQSxLQUFJLFdBQVksT0FBaEI7QUFDQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsT0FBRyxNQUFRRixNQUFNQyxPQUFOLENBQWNFLE9BQWQsQ0FBc0JDLElBQWpDLEVBQXVDLFNBQVM7QUFBQSxjQUFNSixNQUFNSyxXQUFOLENBQWtCTCxNQUFNQyxPQUF4QixDQUFOO0FBQUEsT0FBaEQ7QUFBeUZELFdBQU1DLE9BQU4sQ0FBY0UsT0FBZCxDQUFzQkc7QUFBL0c7QUFBSixJQURBO0FBRUE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLE9BQUcsTUFBUU4sTUFBTUMsT0FBTixDQUFjTSxPQUFkLENBQXNCQyxJQUFqQyxFQUF1QyxTQUFTO0FBQUEsY0FBTVIsTUFBTUssV0FBTixDQUFrQkwsTUFBTUMsT0FBeEIsQ0FBTjtBQUFBLE9BQWhEO0FBQXlGRCxXQUFNQyxPQUFOLENBQWNNLE9BQWQsQ0FBc0JFO0FBQS9HO0FBQUosSUFGQTtBQUdBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxPQUFHLE1BQVFULE1BQU1DLE9BQU4sQ0FBY1MsT0FBZCxDQUFzQkMsSUFBakMsRUFBdUMsU0FBUztBQUFBLGNBQU1YLE1BQU1LLFdBQU4sQ0FBa0JMLE1BQU1DLE9BQXhCLENBQU47QUFBQSxPQUFoRDtBQUF5RkQsV0FBTUMsT0FBTixDQUFjUyxPQUFkLENBQXNCRTtBQUEvRztBQUFKO0FBSEE7QUFKQSxFQUR1QjtBQUFBLENBQXhCO0FBWUFiLGtCQUFrQmMsU0FBbEIsR0FBOEI7QUFDN0JaLFVBQVNhLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURILENBQTlCIiwiZmlsZSI6IkNhdGVnb3J5TGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENhdGVnb3J5TGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS10aXRsZVwiID5cclxuXHQ8aDI+e3Byb3BzLmFydGljbGUubmFtZX08L2gyPlxyXG5cdDwvZGl2PlxyXG5cdDx1bCBjbGFzc05hbWUgPSAndGl0bGUnPlxyXG5cdDxsaT48YSBocmVmID0ge3Byb3BzLmFydGljbGUuYXV0aG9yMS51cmwxfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbmNsaWNrSXRlbShwcm9wcy5hcnRpY2xlKX0+e3Byb3BzLmFydGljbGUuYXV0aG9yMS50aXRsZTF9PC9hPjwvbGk+XHJcblx0PGxpPjxhIGhyZWYgPSB7cHJvcHMuYXJ0aWNsZS5hdXRob3IyLnVybDJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uY2xpY2tJdGVtKHByb3BzLmFydGljbGUpfT57cHJvcHMuYXJ0aWNsZS5hdXRob3IyLnRpdGxlMn08L2E+PC9saT5cclxuXHQ8bGk+PGEgaHJlZiA9IHtwcm9wcy5hcnRpY2xlLmF1dGhvcjMudXJsM30gb25DbGljaz17KCkgPT4gcHJvcHMub25jbGlja0l0ZW0ocHJvcHMuYXJ0aWNsZSl9Pntwcm9wcy5hcnRpY2xlLmF1dGhvcjMudGl0bGUzfTwvYT48L2xpPlxyXG5cdDwvdWw+XHJcblx0PC9kaXY+XHJcblx0KVxyXG5DYXRlZ29yeUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XHJcblx0YXJ0aWNsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn07XHJcbiJdfQ==