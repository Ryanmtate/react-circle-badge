'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          fill = _props.fill,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          opacity = _props.opacity,
          name = _props.name,
          x = _props.x,
          y = _props.y,
          fontSize = _props.fontSize;


      var initials = name.split(" ").map(function (w) {
        return w[0].toUpperCase();
      }).concat();

      opacity = opacity ? opacity : '0';
      width = width ? width : '100%';
      height = height ? height : '100%';
      style = style ? style : null;
      x = x ? x : "175";
      y = y ? y : "215";
      fontSize = fontSize ? fontSize : "36px";

      return _react2.default.createElement(
        'svg',
        { width: width, height: height, viewBox: '0 0 400 400', style: style },
        _react2.default.createElement('circle', { cx: '200', cy: '200', r: '42', fill: fill }),
        _react2.default.createElement(
          'text',
          { x: x, y: y, fontSize: fontSize, fontWeight: 200, fill: '#fff' },
          initials
        )
      );
    }
  }]);

  return Badge;
}(_react.Component);

exports.default = Badge;