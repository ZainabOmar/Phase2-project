"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			article: articles[0],
			articles: articles
		};
		return _this;
	}

	_createClass(App, [{
		key: "onclickItem",
		value: function onclickItem(article) {
			console.log(article);
			this.setState({
				CurrentArticle: article
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					React.createElement(
						"center",
						null,
						"Articles Factory"
					)
				),
				React.createElement(
					"div",
					{ className: "current-article" },
					React.createElement(CurrentArticle, { article: this.state.article })
				),
				React.createElement(
					"div",
					{ className: "CategoryList" },
					React.createElement(CategoryList, { onclickItem: this.onclickItem.bind(this), articles: this.state.articles })
				)
			);
		}
	}]);

	return App;
}(React.Component);

console.log(articles[0].category.name);
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcnRpY2xlcy5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImFydGljbGUiLCJhcnRpY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIkN1cnJlbnRBcnRpY2xlIiwib25jbGlja0l0ZW0iLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjYXRlZ29yeSIsIm5hbWUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBR2xCLFFBQUtDLEtBQUwsR0FBWTtBQUNYQyxZQUFTQyxTQUFTLENBQVQsQ0FERTtBQUVYQSxhQUFVQTtBQUZDLEdBQVo7QUFIa0I7QUFPbEI7Ozs7OEJBRVlELE8sRUFBUztBQUNyQkUsV0FBUUMsR0FBUixDQUFZSCxPQUFaO0FBQ0EsUUFBS0ksUUFBTCxDQUFjO0FBQ2JDLG9CQUFnQkw7QUFESCxJQUFkO0FBR0E7OzsyQkFFUztBQUNULFVBQ0M7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLEtBREE7QUFFQTtBQUFBO0FBQUEsT0FBSyxXQUFVLGlCQUFmO0FBQ0MseUJBQUMsY0FBRCxJQUFnQixTQUFTLEtBQUtELEtBQUwsQ0FBV0MsT0FBcEM7QUFERCxLQUZBO0FBS0E7QUFBQTtBQUFBLE9BQUssV0FBVSxjQUFmO0FBRUMseUJBQUMsWUFBRCxJQUFjLGFBQWUsS0FBS00sV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0IsRUFBMEQsVUFBVSxLQUFLUixLQUFMLENBQVdFLFFBQS9FO0FBRkQ7QUFMQSxJQUREO0FBV0c7Ozs7RUE3QmFPLE1BQU1DLFM7O0FBK0J2QlAsUUFBUUMsR0FBUixDQUFZRixTQUFTLENBQVQsRUFBWVMsUUFBWixDQUFxQkMsSUFBakM7QUFDQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIEN1cnJlbnRBcnRpY2xlID0gKHByb3BzKSA9PiAoXHJcbi8vIFx0PGRpdiBjbGFzc05hbWU9XCJjdXJyZW50XCI+XHJcbi8vIFx0PGRpdiBjbGFzc05hbWU9XCJyZWFkaW5nXCIgc3JjPXtwcm9wcy5hcnRpY2xlcy5jYXRlZ29yeS51cmx9PjwvZGl2PlxyXG4vLyBcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbi8vIFx0PGgyPjxjZW50ZXI+SG9tZTwvY2VudGVyPjwvaDI+XHJcbi8vIFx0PC9uYXY+XHJcbi8vIFx0PC9kaXY+XHJcbi8vIFx0KVxyXG5cclxuLy8gdmFyIENhdGVnb3J5TGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXHJcbi8vIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuLy8gPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXRpdGxlXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25jbGlja0l0ZW0ocHJvcHMuYXJ0aWNsZSl9PlxyXG4vLyB7cHJvcHMuYXJ0aWNsZS5jYXRlZ29yeS5uYW1lfVxyXG4vLyA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcbi8vIFx0KVxyXG5cclxuXHJcbi8vIHZhciBDYXRlZ29yeUxpc3QgPSAocHJvcHMpID0+IChcclxuLy8gXHQ8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNcIj5cclxuLy8gXHQ8aDI+QWxsIENhdGVnb3JpZXMgPC9oMj5cclxuLy8gXHR7cHJvcHMuYXJ0aWNsZXMubWFwIChhcnRpY2xlID0+IFxyXG4vLyBcdFx0PENhdGVnb3J5TGlzdEVudHJ5IGtleSA9IHthcnRpY2xlLmNhdGVnb3J5Lm5hbWV9IGFydGljbGUgPSB7YXJ0aWNsZX0gb25jbGlja0l0ZW0gPSB7cHJvcHMub25jbGlja0l0ZW19Lz5cclxuLy8gXHRcdCl9XHJcbi8vIFx0PC9kaXY+XHJcbi8vIFx0KVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGU9IHtcclxuXHRcdFx0YXJ0aWNsZTogYXJ0aWNsZXNbMF0sXHJcblx0XHRcdGFydGljbGVzOiBhcnRpY2xlc1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25jbGlja0l0ZW0gKGFydGljbGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKGFydGljbGUpXHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0Q3VycmVudEFydGljbGU6IGFydGljbGVcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PGgxPjxjZW50ZXI+QXJ0aWNsZXMgRmFjdG9yeTwvY2VudGVyPjwvaDE+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC1hcnRpY2xlXCI+XHJcblx0XHRcdFx0PEN1cnJlbnRBcnRpY2xlIGFydGljbGU9e3RoaXMuc3RhdGUuYXJ0aWNsZX0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDYXRlZ29yeUxpc3RcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0PENhdGVnb3J5TGlzdCBvbmNsaWNrSXRlbSA9IHt0aGlzLm9uY2xpY2tJdGVtLmJpbmQodGhpcyl9IGFydGljbGVzPXt0aGlzLnN0YXRlLmFydGljbGVzfS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHR9XHJcblx0Y29uc29sZS5sb2coYXJ0aWNsZXNbMF0uY2F0ZWdvcnkubmFtZSlcclxuXHRSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcblxyXG4iXX0=