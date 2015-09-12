"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Spinner = _react2["default"].createClass({
  displayName: "Spinner",

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      size: "65px"
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2["default"].createElement(
      "svg",
      { "class": "spinner", width: this.props.size, height: this.props.size,
        viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" },
      _react2["default"].createElement("circle", { "class": "path", fill: "none",
        "stroke-width": "6", "stroke-linecap": "round",
        cx: "33", cy: "33", r: "30" })
    );
  }
});

exports["default"] = Spinner;
module.exports = exports["default"];