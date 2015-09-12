"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function create(component) {
    _react2["default"].unmountComponentAtNode(document.getElementById("react-material-dialog-container"));
    _react2["default"].render(component, document.getElementById("react-material-dialog-container"));
}

exports["default"] = { create: create };
module.exports = exports["default"];