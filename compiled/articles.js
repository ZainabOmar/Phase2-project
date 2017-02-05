'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$component) {
	_inherits(App, _React$component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',

		// constructor(props) {
		// 	super(props)
		// }
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Hello, world'
				)
			);
		}
	}]);

	return App;
}(React.component);

console.log('helo');

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FydGljbGVzLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsImNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7Ozs7Ozs7Ozs7O0FBQ0w7QUFDQTtBQUNBOzJCQUNVO0FBQ1QsVUFDQztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsSUFERDtBQUlHOzs7O0VBVGFDLE1BQU1DLFM7O0FBV3ZCQyxRQUFRQyxHQUFSLENBQVksTUFBWjs7QUFFQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuY29tcG9uZW50IHtcclxuXHQvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdC8vIFx0c3VwZXIocHJvcHMpXHJcblx0Ly8gfVxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdDxoMT5IZWxsbywgd29ybGQ8L2gxPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHR9XHJcblx0Y29uc29sZS5sb2coJ2hlbG8nKVxyXG5cclxuXHRSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcblxyXG4iXX0=