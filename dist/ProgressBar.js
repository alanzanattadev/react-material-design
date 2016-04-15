'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ProgressBar = _react2['default'].createClass({
  displayName: 'ProgressBar',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      progress: false,
      buffer: false
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(this.refs.bar);
    this.setProgress();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.setProgress();
  },
  componentWillUnmount: function componentWillUnmount() {
    _react2['default'].findDOMNode(this.refs.bar).removeEventListener('mdl-componentupgraded', this.setProgress);
  },
  setProgress: function setProgress() {
    var progressBar = _react2['default'].findDOMNode(this.refs.bar);
    if (this.props.progress) {
      progressBar.MaterialProgress.setProgress(80);
      progressBar.MaterialProgress.setProgress(parseInt(this.props.progress));
      if (this.props.buffer) progressBar.MaterialProgress.setBuffer(parseInt(this.props.buffer));
    }
  },
  _getBarClasses: function _getBarClasses() {
    return (0, _classnames2['default'])({
      "mdl-progress": true,
      "mdl-js-progress": true,
      "mdl-progress__indeterminate": !this.props.progress
    });
  },
  _getBarStyle: function _getBarStyle() {
    return {
      width: this.props.width || "250px"
    };
  },
  render: function render() {
    return _react2['default'].createElement('div', { ref: 'bar', className: this._getBarClasses(), style: this._getBarStyle() });
  }
});

exports['default'] = ProgressBar;
module.exports = exports['default'];