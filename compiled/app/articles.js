'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
		key: 'onclickItem',
		value: function onclickItem(article) {
			this.setState({
				article: articles[0]
			});
			console.log(articles[0].name);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					{ className: 'header' },
					React.createElement(
						'center',
						null,
						'Articles Factory'
					)
				),
				React.createElement(
					'div',
					{ className: 'CategoryList' },
					React.createElement(CategoryList, { onclickItem: this.onclickItem.bind(this), articles: this.state.articles })
				)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcnRpY2xlcy5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImFydGljbGUiLCJhcnRpY2xlcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJvbmNsaWNrSXRlbSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBR2xCLFFBQUtDLEtBQUwsR0FBWTtBQUNYQyxZQUFTQyxTQUFTLENBQVQsQ0FERTtBQUVYQSxhQUFVQTtBQUZDLEdBQVo7QUFIa0I7QUFPbEI7Ozs7OEJBRVlELE8sRUFBUztBQUNyQixRQUFLRSxRQUFMLENBQWM7QUFDYkYsYUFBU0MsU0FBUyxDQUFUO0FBREksSUFBZDtBQUdBRSxXQUFRQyxHQUFSLENBQVlILFNBQVMsQ0FBVCxFQUFZSSxJQUF4QjtBQUNBOzs7MkJBRVM7QUFDVCxVQUNDO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxPQUFJLFdBQVksUUFBaEI7QUFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QixLQURBO0FBRUE7QUFBQTtBQUFBLE9BQUssV0FBVSxjQUFmO0FBQ0EseUJBQUMsWUFBRCxJQUFjLGFBQWUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0IsRUFBMEQsVUFBVSxLQUFLUixLQUFMLENBQVdFLFFBQS9FO0FBREE7QUFGQSxJQUREO0FBT0c7Ozs7RUF6QmFPLE1BQU1DLFM7O0FBNEJ4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlPSB7XHJcblx0XHRcdGFydGljbGU6IGFydGljbGVzWzBdLFxyXG5cdFx0XHRhcnRpY2xlczogYXJ0aWNsZXNcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uY2xpY2tJdGVtIChhcnRpY2xlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0YXJ0aWNsZTogYXJ0aWNsZXNbMF1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coYXJ0aWNsZXNbMF0ubmFtZSlcclxuXHR9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdDxoMSBjbGFzc05hbWUgPSAnaGVhZGVyJz48Y2VudGVyPkFydGljbGVzIEZhY3Rvcnk8L2NlbnRlcj48L2gxPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNhdGVnb3J5TGlzdFwiPlxyXG5cdFx0XHQ8Q2F0ZWdvcnlMaXN0IG9uY2xpY2tJdGVtID0ge3RoaXMub25jbGlja0l0ZW0uYmluZCh0aGlzKX0gYXJ0aWNsZXM9e3RoaXMuc3RhdGUuYXJ0aWNsZXN9Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdH1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5cclxuXHJcbiJdfQ==