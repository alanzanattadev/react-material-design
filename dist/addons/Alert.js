'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _AlertManager = require('./AlertManager');

var _AlertManager2 = _interopRequireDefault(_AlertManager);

var _reactLayoutHelpers = require('react-layout-helpers');

var Alert = _react2['default'].createClass({
  displayName: 'Alert',

  getInitialState: function getInitialState() {
    return {
      visible: true,
      loaded: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onPositiveClick: function onPositiveClick() {},
      onNegativeClick: function onNegativeClick() {}
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      _this.setState((0, _reactAddonsUpdate2['default'])(_this.state, {
        loaded: { $set: true }
      }), 40);
    });
  },
  componentWillUnmount: function componentWillUnmount() {},
  hide: function hide() {
    this.setState((0, _reactAddonsUpdate2['default'])(this.state, {
      visible: { $set: false }
    }));
    setTimeout(function () {
      _AlertManager2['default'].destroy();
    }, 300);
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
    var actions;
    if (this.props.negative && this.props.positive) {
      actions = _react2['default'].createElement(
        _Card2['default'].Action,
        { right: true },
        _react2['default'].createElement(_Button2['default'], { ripple: true, colored: true, text: this.props.negative, onClick: this.onNegativeClick }),
        _react2['default'].createElement(_Button2['default'], { ripple: true, colored: true, text: this.props.positive, onClick: this.onPositiveClick })
      );
    } else if (this.props.positive) {
      actions = _react2['default'].createElement(
        _Card2['default'].Action,
        { right: true },
        _react2['default'].createElement(_Button2['default'], { ripple: true, colored: true, text: this.props.positive, onClick: this.onPositiveClick })
      );
    }
    return _react2['default'].createElement(
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
          transition: "all 0.3s " + _styles2['default'].Animations.Curve,
          opacity: this.state.loaded && this.state.visible ? "1" : "0",
          visibility: this.state.visible ? "visible" : "hidden"
        } },
      _react2['default'].createElement(
        'div',
        { style: { transition: "all 0.5s " + _styles2['default'].Animations.Curve, transform: this.state.loaded && this.state.visible ? "translate3d(0, -20px, 0)" : undefined } },
        _react2['default'].createElement(
          _Card2['default'].Card,
          null,
          _react2['default'].createElement(
            'h6',
            { className: 'mdl-typography--headline', style: { color: "#777", fontSize: "18px", marginLeft: "15px" } },
            this.props.title
          ),
          this.props.children || (this.props.loading ? [_react2['default'].createElement(
            _reactLayoutHelpers.FlexLayout,
            { primary: 'center', secondary: 'center', vertical: true, flex: '2', key: 'flex2' },
            _react2['default'].createElement(_Spinner2['default'], { active: true })
          ), _react2['default'].createElement(_reactLayoutHelpers.FlexLayout, { flex: '1', key: 'flex1' })] : undefined) || _react2['default'].createElement(_reactLayoutHelpers.FlexLayout, { flex: '1' }),
          actions
        )
      )
    );
  }
});

exports['default'] = (0, _radium2['default'])(Alert);
module.exports = exports['default'];