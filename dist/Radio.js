'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Radio = _react2['default'].createClass({
  displayName: 'Radio',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      ripple: true,
      disabled: false
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(this.refs.label);
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var classes = (0, _classnames2['default'])({
      "mdl-radio": true,
      "mdl-js-radio": true,
      "mdl-js-ripple-effect": this.props.ripple
    });
    return _react2['default'].createElement(
      'label',
      { className: classes, 'for': this.props.id, ref: 'label', onClick: this.props.onClick },
      _react2['default'].createElement('input', { className: 'mdl-radio__button', id: this.props.id, name: this.props.name, type: 'radio', value: this.props.value, disabled: this.props.disabled, checked: this.props.checked, onChange: this.props.onChange }),
      _react2['default'].createElement(
        'span',
        { className: 'mdl-radio__label' },
        this.props.text
      )
    );
  }
});

exports['default'] = Radio;
module.exports = exports['default'];