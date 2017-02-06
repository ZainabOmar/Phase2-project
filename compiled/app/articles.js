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
				CurrentArticle: article.category.url
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcnRpY2xlcy5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImFydGljbGUiLCJhcnRpY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIkN1cnJlbnRBcnRpY2xlIiwiY2F0ZWdvcnkiLCJ1cmwiLCJvbmNsaWNrSXRlbSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm5hbWUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBR2xCLFFBQUtDLEtBQUwsR0FBWTtBQUNYQyxZQUFTQyxTQUFTLENBQVQsQ0FERTtBQUVYQSxhQUFVQTtBQUZDLEdBQVo7QUFIa0I7QUFPbEI7Ozs7OEJBRVlELE8sRUFBUztBQUNyQkUsV0FBUUMsR0FBUixDQUFZSCxPQUFaO0FBQ0EsUUFBS0ksUUFBTCxDQUFjO0FBQ2JDLG9CQUFnQkwsUUFBUU0sUUFBUixDQUFpQkM7QUFEcEIsSUFBZDtBQUdBOzs7MkJBRVM7QUFDVCxVQUNDO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixLQURBO0FBRUE7QUFBQTtBQUFBLE9BQUssV0FBVSxpQkFBZjtBQUNDLHlCQUFDLGNBQUQsSUFBZ0IsU0FBUyxLQUFLUixLQUFMLENBQVdDLE9BQXBDO0FBREQsS0FGQTtBQUtBO0FBQUE7QUFBQSxPQUFLLFdBQVUsY0FBZjtBQUVDLHlCQUFDLFlBQUQsSUFBYyxhQUFlLEtBQUtRLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQTdCLEVBQTBELFVBQVUsS0FBS1YsS0FBTCxDQUFXRSxRQUEvRTtBQUZEO0FBTEEsSUFERDtBQVdHOzs7O0VBN0JhUyxNQUFNQyxTOztBQStCdkJULFFBQVFDLEdBQVIsQ0FBWUYsU0FBUyxDQUFULEVBQVlLLFFBQVosQ0FBcUJNLElBQWpDO0FBQ0FDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBDdXJyZW50QXJ0aWNsZSA9IChwcm9wcykgPT4gKFxyXG4vLyBcdDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudFwiPlxyXG4vLyBcdDxkaXYgY2xhc3NOYW1lPVwicmVhZGluZ1wiIHNyYz17cHJvcHMuYXJ0aWNsZXMuY2F0ZWdvcnkudXJsfT48L2Rpdj5cclxuLy8gXHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4vLyBcdDxoMj48Y2VudGVyPkhvbWU8L2NlbnRlcj48L2gyPlxyXG4vLyBcdDwvbmF2PlxyXG4vLyBcdDwvZGl2PlxyXG4vLyBcdClcclxuXHJcbi8vIHZhciBDYXRlZ29yeUxpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxyXG4vLyA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS10aXRsZVwiIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uY2xpY2tJdGVtKHByb3BzLmFydGljbGUpfT5cclxuLy8ge3Byb3BzLmFydGljbGUuY2F0ZWdvcnkubmFtZX1cclxuLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4vLyBcdClcclxuXHJcblxyXG4vLyB2YXIgQ2F0ZWdvcnlMaXN0ID0gKHByb3BzKSA9PiAoXHJcbi8vIFx0PGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzXCI+XHJcbi8vIFx0PGgyPkFsbCBDYXRlZ29yaWVzIDwvaDI+XHJcbi8vIFx0e3Byb3BzLmFydGljbGVzLm1hcCAoYXJ0aWNsZSA9PiBcclxuLy8gXHRcdDxDYXRlZ29yeUxpc3RFbnRyeSBrZXkgPSB7YXJ0aWNsZS5jYXRlZ29yeS5uYW1lfSBhcnRpY2xlID0ge2FydGljbGV9IG9uY2xpY2tJdGVtID0ge3Byb3BzLm9uY2xpY2tJdGVtfS8+XHJcbi8vIFx0XHQpfVxyXG4vLyBcdDwvZGl2PlxyXG4vLyBcdClcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlPSB7XHJcblx0XHRcdGFydGljbGU6IGFydGljbGVzWzBdLFxyXG5cdFx0XHRhcnRpY2xlczogYXJ0aWNsZXNcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uY2xpY2tJdGVtIChhcnRpY2xlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhhcnRpY2xlKVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdEN1cnJlbnRBcnRpY2xlOiBhcnRpY2xlLmNhdGVnb3J5LnVybFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDE+PGNlbnRlcj5BcnRpY2xlcyBGYWN0b3J5PC9jZW50ZXI+PC9oMT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LWFydGljbGVcIj5cclxuXHRcdFx0XHQ8Q3VycmVudEFydGljbGUgYXJ0aWNsZT17dGhpcy5zdGF0ZS5hcnRpY2xlfS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNhdGVnb3J5TGlzdFwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8Q2F0ZWdvcnlMaXN0IG9uY2xpY2tJdGVtID0ge3RoaXMub25jbGlja0l0ZW0uYmluZCh0aGlzKX0gYXJ0aWNsZXM9e3RoaXMuc3RhdGUuYXJ0aWNsZXN9Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhhcnRpY2xlc1swXS5jYXRlZ29yeS5uYW1lKVxyXG5cdFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5cclxuXHJcbiJdfQ==