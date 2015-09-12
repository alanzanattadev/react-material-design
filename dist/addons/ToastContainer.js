"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ToastContainer = _react2["default"].createClass({
  displayName: "ToastContainer",

  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2["default"].createElement("div", { id: "react-material-toast-container", style: { zIndex: "10" } });
  }
});

exports["default"] = ToastContainer;
module.exports = exports["default"];