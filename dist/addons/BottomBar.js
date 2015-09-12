'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var BottomBar = _react2['default'].createClass({
  displayName: 'BottomBar',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      visible: true
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var classes = (0, _classnames2['default'])({
      'bottom-bar': true,
      'out': this.props.visible,
      'in': !this.props.visible
    });
    return _react2['default'].createElement(
      'div',
      { className: classes, style: { height: this.props.height } },
      this.props.children,
      _react2['default'].createElement(_Button2['default'], { colored: true, fab: true, icon: this.props.icon, onClick: this.props.onClick })
    );
  }
});

exports['default'] = BottomBar;
module.exports = exports['default'];