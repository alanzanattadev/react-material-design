"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function create(toast) {
    _react2["default"].unmountComponentAtNode(document.getElementById("react-material-toast-container"));
    _react2["default"].render(toast, document.getElementById("react-material-toast-container"));
}

exports["default"] = { create: create };
module.exports = exports["default"];