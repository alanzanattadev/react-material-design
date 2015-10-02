"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function destroy() {
  _react2["default"].unmountComponentAtNode(document.getElementById("react-material-dialog-container"));
}

function create(component) {
  destroy();
  _react2["default"].render(component, document.getElementById("react-material-dialog-container"));
}

exports["default"] = { create: create, destroy: destroy };
module.exports = exports["default"];