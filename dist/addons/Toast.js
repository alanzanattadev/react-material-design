'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Toast = _reactAddons2['default'].createClass({
  displayName: 'Toast',

  getInitialState: function getInitialState() {
    return {
      visible: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onCreated: function onCreated() {},
      onClose: function onClose() {}
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.props.onCreated();
    setTimeout(function () {
      _this.setState(_reactAddons2['default'].addons.update(_this.state, {
        visible: { $set: true }
      }));
    }, 10);
    this.timeoutHandler = this.timeout();
  },
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeoutHandler);
  },
  timeout: function timeout() {
    return setTimeout(this.hide, 4000);
  },
  hide: function hide() {
    this.setState(_reactAddons2['default'].addons.update(this.state, {
      visible: { $set: false }
    }));
    this.props.onClose();
  },
  render: function render() {
    return _reactAddons2['default'].createElement(
      'div',
      { style: {
          minHeight: "48px",
          maxHeight: "80px",
          width: "100%",
          position: "fixed",
          bottom: "0",
          left: "0",
          zIndex: "10"
        } },
      _reactAddons2['default'].createElement(
        'div',
        { style: {
            minHeight: "48px",
            maxHeight: "80px",
            backgroundColor: "#323232",
            width: "100%",
            maxWidth: "568px",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            bottom: "-80px",
            color: "#fff",
            fontSize: "14px",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
            transition: "1s cubic-bezier(.55,0,.1,1)",
            transform: this.state.visible ? "translate3d(0, -80px, 0)" : undefined,
            zIndex: "10"
          }
        },
        _reactAddons2['default'].createElement(
          'span',
          { style: { marginLeft: "25px" } },
          this.props.text
        ),
        _reactAddons2['default'].createElement('span', { style: { flexGrow: "1" } }),
        _reactAddons2['default'].createElement(_Button2['default'], { accent: true, text: this.props.button ? this.props.button.toUpperCase() : "", onClick: this.props.onClick, visible: this.props.button }),
        _reactAddons2['default'].createElement('span', { style: { width: "15px", flexBasis: "15px", flexGrow: "0" } })
      )
    );
  }
});

exports['default'] = (0, _radium2['default'])(Toast);
module.exports = exports['default'];