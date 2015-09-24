'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _ProgressBar = require('../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var BottomBar = _react2['default'].createClass({
  displayName: 'BottomBar',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      visible: true,
      loading: false
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var styles = {
      bottombar: {
        height: this.props.height || "100px",
        position: "absolute",
        left: "0",
        bottom: "-100",
        width: "100%",
        backgroundColor: _styles2['default'].Colors.Main,
        transition: "1s" + " " + _styles2['default'].Animations.Curve,
        transform: "translate3d(0, 100px, 0)"
      },
      out: {
        transform: "translate3d(0, -100px, 0)"
      },
      fabButton: {
        position: "absolute",
        top: "-28",
        right: "25",
        transition: "1s" + " " + _styles2['default'].Animations.Curve,
        transitionDelay: "0.25s",
        transform: !this.props.visible && "translate3d(0, 200px, 0)",
        transform: this.props.visible && "translate3d(0, 0, 0)"
      }
    };
    return _react2['default'].createElement(
      'div',
      { className: 'react-material-design-BottomBar', style: [styles.bottombar, this.props.visible && styles.out] },
      _react2['default'].createElement(_radium.Style, { scopeSelector: '.react-material-design-BottomBar', rules: { "button:first-of-type": styles.fabButton } }),
      _react2['default'].createElement(_Button2['default'], { colored: true, fab: true, icon: this.props.icon, onClick: this.props.onClick }),
      _react2['default'].createElement(
        'div',
        { style: { width: "100%", visibility: this.props.loading ? "visible" : "hidden", position: "absolute", top: "0", zIndex: "-1" } },
        _react2['default'].createElement(_ProgressBar2['default'], { width: '100%' })
      ),
      this.props.children
    );
  }
});

exports['default'] = (0, _radium2['default'])(BottomBar);
module.exports = exports['default'];