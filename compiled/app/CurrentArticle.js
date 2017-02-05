"use strict";

var CurrentArticle = function CurrentArticle(props) {
	return React.createElement(
		"div",
		{ className: "current" },
		React.createElement("div", { className: "reading", src: props.article.category.url }),
		React.createElement(
			"nav",
			{ className: "navbar" },
			React.createElement(
				"h2",
				null,
				React.createElement(
					"center",
					null,
					"Home"
				)
			)
		)
	);
};
CurrentArticle.propTypes = {
	article: React.PropTypes.array.isRequired
};

window.CurrentArticle = CurrentArticle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9DdXJyZW50QXJ0aWNsZS5qc3giXSwibmFtZXMiOlsiQ3VycmVudEFydGljbGUiLCJwcm9wcyIsImFydGljbGUiLCJjYXRlZ29yeSIsInVybCIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFFBQ3BCO0FBQUE7QUFBQSxJQUFLLFdBQVUsU0FBZjtBQUNBLCtCQUFLLFdBQVUsU0FBZixFQUF5QixLQUFLQSxNQUFNQyxPQUFOLENBQWNDLFFBQWQsQ0FBdUJDLEdBQXJELEdBREE7QUFFQTtBQUFBO0FBQUEsS0FBSyxXQUFVLFFBQWY7QUFDQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFEQTtBQUZBLEVBRG9CO0FBQUEsQ0FBckI7QUFRQUosZUFBZUssU0FBZixHQUEyQjtBQUN6QkgsVUFBU0ksTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRE4sQ0FBM0I7O0FBSUFDLE9BQU9WLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6IkN1cnJlbnRBcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEN1cnJlbnRBcnRpY2xlID0gKHByb3BzKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJjdXJyZW50XCI+XHJcblx0PGRpdiBjbGFzc05hbWU9XCJyZWFkaW5nXCIgc3JjPXtwcm9wcy5hcnRpY2xlLmNhdGVnb3J5LnVybH0+PC9kaXY+XHJcblx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHQ8aDI+PGNlbnRlcj5Ib21lPC9jZW50ZXI+PC9oMj5cclxuXHQ8L25hdj5cclxuXHQ8L2Rpdj5cclxuXHQpXHJcbkN1cnJlbnRBcnRpY2xlLnByb3BUeXBlcyA9IHtcclxuICBhcnRpY2xlOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxud2luZG93LkN1cnJlbnRBcnRpY2xlID0gQ3VycmVudEFydGljbGU7XHJcbiJdfQ==