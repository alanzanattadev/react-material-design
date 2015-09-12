"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DialogContainer = _react2["default"].createClass({
  displayName: "DialogContainer",

  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2["default"].createElement("div", { id: "react-material-dialog-container", style: { zIndex: "20" } });
  }
});

exports["default"] = DialogContainer;
module.exports = exports["default"];