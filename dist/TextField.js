'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TextField = _react2['default'].createClass({
  displayName: 'TextField',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      floating: false,
      error: false
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(this.refs.div);
  },
  componentWillUnmount: function componentWillUnmount() {},
  _getDivClasses: function _getDivClasses() {
    return {
      'mdl-textfield': true,
      'mdl-js-textfield': true,
      'mdl-textfield--floating-label': this.props.floating
    };
  },
  onTextChange: function onTextChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  },
  render: function render() {
    var divClasses = (0, _classnames2['default'])(this._getDivClasses());
    var type = this.props.password && "password" || this.props.email && "email" || this.props.tel && "tel" || this.props.number && "number" || "text";
    return _react2['default'].createElement(
      'div',
      { className: divClasses, ref: 'div' },
      _react2['default'].createElement('input', { className: 'mdl-textfield__input', type: type, id: this.props.id, onChange: this.onTextChange }),
      _react2['default'].createElement(
        'label',
        { className: 'mdl-textfield__label', 'for': this.props.id },
        this.props.label
      ),
      _react2['default'].createElement(
        'span',
        { className: 'mdl-textfield__error' },
        this.props.error
      )
    );
  }
});

exports['default'] = TextField;
module.exports = exports['default'];