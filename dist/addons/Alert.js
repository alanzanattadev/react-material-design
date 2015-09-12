'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var Alert = _reactAddons2['default'].createClass({
  displayName: 'Alert',

  getInitialState: function getInitialState() {
    return {
      visible: true
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onPositiveClick: function onPositiveClick() {},
      onNegativeClick: function onNegativeClick() {}
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  hide: function hide() {
    this.setState(_reactAddons2['default'].addons.update(this.state, {
      visible: { $set: false }
    }));
  },
  onPositiveClick: function onPositiveClick() {
    this.hide();
    this.props.onPositiveClick();
  },
  onNegativeClick: function onNegativeClick() {
    this.hide();
    this.props.onNegativeClick();
  },
  render: function render() {
    return _reactAddons2['default'].createElement(
      'div',
      { style: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "row nowrap",
          zIndex: "10",
          visibility: this.state.visible ? "visible" : "hidden"
        } },
      _reactAddons2['default'].createElement(
        _Card2['default'].Card,
        null,
        _reactAddons2['default'].createElement(
          _Card2['default'].Title,
          null,
          this.props.title
        ),
        this.props.children,
        _reactAddons2['default'].createElement(
          _Card2['default'].Action,
          null,
          _reactAddons2['default'].createElement(_Button2['default'], { ripple: true, colored: true, text: this.props.negative, onClick: this.onNegativeClick }),
          _reactAddons2['default'].createElement(_Button2['default'], { ripple: true, colored: true, text: this.props.positive, onClick: this.onPositiveClick })
        )
      )
    );
  }
});

exports['default'] = Alert;
module.exports = exports['default'];