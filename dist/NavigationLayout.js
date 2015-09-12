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

var NavigationLayout = _react2['default'].createClass({
  displayName: 'NavigationLayout',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      "header": false,
      "drawer": true,
      "drawer-links": [],
      "scroll": false,
      "fixed-header": true,
      "fixed-drawer": false
    };
  },
  componentDidMount: function componentDidMount() {
    componentHandler.upgradeElement(_react2['default'].findDOMNode(this.refs.layout));
  },
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var headerClasses = (0, _classnames2['default'])({
      "mdl-layout__header": true,
      "mdl-layout__header--scroll": this.props.scroll
    });

    var layoutClasses = (0, _classnames2['default'])({
      "mdl-layout": true,
      "mdl-js-layout": true,
      "mdl-layout--fixed-header": this.props["fixed-header"],
      "mdl-layout--fixed-drawer": this.props["fixed-drawer"],
      "mdl-layout--overlay-drawer-button": !this.props.header
    });

    return _react2['default'].createElement(
      'div',
      { ref: 'layout', className: layoutClasses },
      this.props.header ? _react2['default'].createElement(
        'header',
        { className: headerClasses, style: {} },
        _react2['default'].createElement('div', { className: 'mdl-layout-icon' }),
        _react2['default'].createElement(
          'div',
          { className: 'mdl-layout__header-row' },
          this.props["header-icon"] ? [_react2['default'].createElement('div', { className: 'mdl-layout-spacer', key: 'spacer-1' }), _react2['default'].createElement('img', { key: 'img-1', src: this.props["header-icon"], style: this.props["header-icon-style"] }), _react2['default'].createElement('div', { key: 'spacer-2', className: 'mdl-layout-spacer' })] : [_react2['default'].createElement(
            'span',
            { key: 'title-1', className: 'mdl-layout-title' },
            this.props["header-title"]
          ), _react2['default'].createElement('div', { key: 'spacer-1', className: 'mdl-layout-spacer' })],
          this.props["header-links"] ? _react2['default'].createElement(
            'nav',
            { className: 'mdl-navigation mdl-layout--large-screen-only' },
            this.props["header-links"].map(function (link, index) {
              if (link.href) return _react2['default'].createElement(
                'a',
                { className: 'mdl-navigation__link', href: link.href, key: "header-" + index },
                link.name
              );else if (link.onClick) return _react2['default'].createElement(_Button2['default'], { ripple: true, onClick: link.onClick, key: "header-" + index, text: link.name });
            })
          ) : undefined
        )
      ) : null,
      this.props.drawer ? _react2['default'].createElement(
        'div',
        { className: 'mdl-layout__drawer' },
        _react2['default'].createElement(
          'span',
          { className: 'mdl-layout-title' },
          this.props["drawer-title"]
        ),
        _react2['default'].createElement(
          'nav',
          { className: 'mdl-navigation' },
          this.props["drawer-links"].map(function (link, index) {
            if (link.href) return _react2['default'].createElement(
              'a',
              { className: 'mdl-navigation__link', href: link.href, onClick: link.onClick, key: "drawer-" + index },
              link.name
            );else return _react2['default'].createElement(_Button2['default'], { ripple: true, onClick: link.onClick, key: "drawer-" + index, text: link.name });
          })
        )
      ) : null,
      _react2['default'].createElement(
        'main',
        { className: 'mdl-layout__content' },
        this.props.children
      )
    );
  }
});

exports['default'] = NavigationLayout;
module.exports = exports['default'];