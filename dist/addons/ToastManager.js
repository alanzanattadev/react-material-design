'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function create(toast) {
    _reactDom2['default'].render(_react2['default'].createElement('div', null), document.getElementById("react-material-toast-container"));
    _reactDom2['default'].render(toast, document.getElementById("react-material-toast-container"));
}

exports['default'] = { create: create };
module.exports = exports['default'];