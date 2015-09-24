'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Spinner = _react2['default'].createClass({
  displayName: 'Spinner',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(_react2['default'].findDOMNode(this.refs.spinner));
  },
  componentWillUnmount: function componentWillUnmount() {},
  _getSpinnerStyle: function _getSpinnerStyle() {
    return (0, _classnames2['default'])({
      "mdl-spinner": true,
      "mdl-js-spinner": true,
      "mdl-spinner--single-color": !this.props.multicolor,
      "is-active": this.props.active
    });
  },
  render: function render() {
    return _react2['default'].createElement('div', { ref: 'spinner', className: this._getSpinnerStyle() });
  }
});

exports['default'] = Spinner;
module.exports = exports['default'];