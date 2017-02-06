"use strict";

var CategoryList = function CategoryList(props) {
	return React.createElement(
		"div",
		{ className: "categories" },
		React.createElement(
			"h2",
			{ className: "head" },
			"All Categories "
		),
		props.articles.map(function (article) {
			return React.createElement(CategoryListEntry, { key: article.id,
				article: article, onclickItem: props.onclickItem });
		})
	);
};

CategoryList.propTypes = {
	articles: React.PropTypes.array.isRequired
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jYXRlZ29yeUxpc3QuanN4Il0sIm5hbWVzIjpbIkNhdGVnb3J5TGlzdCIsInByb3BzIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiaWQiLCJvbmNsaWNrSXRlbSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsUUFDbEI7QUFBQTtBQUFBLElBQUssV0FBVSxZQUFmO0FBQ0E7QUFBQTtBQUFBLEtBQUksV0FBWSxNQUFoQjtBQUFBO0FBQUEsR0FEQTtBQUVDQSxRQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBb0I7QUFBQSxVQUNwQixvQkFBQyxpQkFBRCxJQUFvQixLQUFPQyxRQUFRQyxFQUFuQztBQUNBLGFBQVdELE9BRFgsRUFDb0IsYUFBZUgsTUFBTUssV0FEekMsR0FEb0I7QUFBQSxHQUFwQjtBQUZELEVBRGtCO0FBQUEsQ0FBbkI7O0FBVUFOLGFBQWFPLFNBQWIsR0FBeUI7QUFDeEJMLFdBQVVNLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURSLENBQXpCIiwiZmlsZSI6ImNhdGVnb3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDYXRlZ29yeUxpc3QgPSAocHJvcHMpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNcIj5cclxuXHQ8aDIgY2xhc3NOYW1lID0gJ2hlYWQnPkFsbCBDYXRlZ29yaWVzIDwvaDI+XHJcblx0e3Byb3BzLmFydGljbGVzLm1hcCAoYXJ0aWNsZSA9PiBcclxuXHRcdDxDYXRlZ29yeUxpc3RFbnRyeSAga2V5ID0ge2FydGljbGUuaWR9XHJcblx0XHRhcnRpY2xlID0ge2FydGljbGV9IG9uY2xpY2tJdGVtID0ge3Byb3BzLm9uY2xpY2tJdGVtfS8+XHJcblx0XHQpfVxyXG5cdDwvZGl2PlxyXG5cdClcclxuXHJcbkNhdGVnb3J5TGlzdC5wcm9wVHlwZXMgPSB7XHJcblx0YXJ0aWNsZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbn07XHJcbiJdfQ==