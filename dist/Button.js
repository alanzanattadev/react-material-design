'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Button = _react2['default'].createClass({
  displayName: 'Button',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      fab: false,
      colored: false,
      ripple: true,
      primary: false,
      accent: false,
      mini: false,
      white: false,
      visible: true,
      raised: false
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(this.refs.button);
  },
  componentWillUnmount: function componentWillUnmount() {},
  _getButtonClasses: function _getButtonClasses() {
    return {
      'mdl-button': true,
      'mdl-js-button': true,
      'mdl-button--fab': this.props.fab,
      'mdl-button--colored': this.props.colored,
      'mdl-js-ripple-effect': this.props.ripple,
      'mdl-button--primary': this.props.primary,
      'mdl-button--accent': this.props.accent,
      'mdl-button--mini-fab': this.props.mini,
      'mdl-button--icon': this.props.icon && !this.props.fab && !this.props.mini,
      'mdl-button--raised': this.props.raised
    };
  },
  render: function render() {
    var buttonClasses = (0, _classnames2['default'])(this._getButtonClasses());
    var content;
    if (this.props.children) {
      content = this.props.children;
    } else {
      content = this.props.icon ? _react2['default'].createElement(
        'i',
        { className: 'material-icons' },
        this.props.icon
      ) : this.props.text;
    }
    var style = {};
    if (this.props.background) {
      style.backgroundColor = this.props.background;
    }
    if (this.props.white) {
      style.color = "#fff";
    }
    if (!this.props.visible) {
      style.visibility = "hidden";
    }
    return _react2['default'].createElement(
      'button',
      { style: style, ref: 'button', className: buttonClasses, onClick: this.props.onClick },
      content
    );
  }
});

exports['default'] = Button;
module.exports = exports['default'];