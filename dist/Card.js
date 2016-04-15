'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Card = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      shadow: "2"
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(this.refs.card);
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var classes = (0, _classnames2['default'])({
      "mdl-card": true,
      "mdl-shadow--2dp": this.props.shadow == "2",
      "mdl-shadow--3dp": this.props.shadow == "3",
      "mdl-shadow--4dp": this.props.shadow == "4",
      "mdl-shadow--6dp": this.props.shadow == "6",
      "mdl-shadow--8dp": this.props.shadow == "8",
      "mdl-shadow--16dp": this.props.shadow == "16"
    });
    if (this.props.classNames) classes = classes + " " + this.props.classNames;
    var styles = {
      height: this.props.height,
      width: this.props.width,
      margin: "5px",
      display: "inline-flex",
      transition: "all 1s cubic-bezier(.55,0,.1,1)"
    };
    if (this.props.background) styles.background = "url(" + this.props.background + ") center / cover";
    return _react2['default'].createElement(
      'div',
      { ref: 'card', className: classes, style: styles, onClick: this.props.onClick },
      this.props.children
    );
  }
}));

var Title = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      heading: "4",
      expand: true
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var classes = (0, _classnames2['default'])({
      "mdl-card__title": true,
      "mdl-card--expand": this.props.expand
    });
    var styles = {};
    if (this.props.background) styles.background = "url(" + this.props.background + ") center / cover";
    var titleClasses = (0, _classnames2['default'])({
      "mdl-card__title-text": true
    });
    var titleStyles = {
      "color": this.props.white ? "#fff" : "#000"
    };
    var title;
    switch (this.props.heading) {
      case "1":
        title = _react2['default'].createElement(
          'h1',
          { className: titleClasses, style: titleStyles },
          this.props.children
        );
        break;
      case "2":
        title = _react2['default'].createElement(
          'h2',
          { className: titleClasses, style: titleStyles },
          this.props.children
        );
        break;
      case "3":
        title = _react2['default'].createElement(
          'h3',
          { className: titleClasses, style: titleStyles },
          this.props.children
        );
        break;
      case "4":
        title = _react2['default'].createElement(
          'h4',
          { className: titleClasses, style: titleStyles },
          this.props.children
        );
        break;
      case "5":
        title = _react2['default'].createElement(
          'h5',
          { className: titleClasses, style: titleStyles },
          this.props.children
        );
        break;
      case "6":
        title = _react2['default'].createElement(
          'h6',
          { className: titleClasses, style: titleStyles },
          this.props.children
        );
        break;
      default:
    }
    return _react2['default'].createElement(
      'div',
      { className: classes, style: styles },
      title
    );
  }
}));

var Text = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'mdl-card__supporting-text' },
      this.props.children
    );
  }
}));

var Menu = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'mdl-card__menu' },
      this.props.children
    );
  }
}));

var Action = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      border: false
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var classes = (0, _classnames2['default'])({
      "mdl-card__actions": true,
      "mdl-card--border": this.props.border
    });
    var styles = {};
    if (this.props.wrapped) {
      if (this.props.wrapped !== true) styles.background = this.props.wrapped;else styles.background = "rgba(0, 0, 0, 0.2)";
    }
    return _react2['default'].createElement(
      'div',
      { className: classes, style: [styles, { textAlign: this.props.right ? "right" : "left" }] },
      this.props.children
    );
  }
}));

//export {Card, Title, Text, Menu, Action};
exports['default'] = { Card: Card, Title: Title, Text: Text, Menu: Menu, Action: Action };
module.exports = exports['default'];