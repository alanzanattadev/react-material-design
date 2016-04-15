import React from 'react';
import classNames from 'classnames';

var Button = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      fab: false,
      colored: false,
      ripple: true,
      primary: false,
      accent: false,
      mini: false,
      white: false,
      visible: true,
      raised: false
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(this.refs.button);
  },
  componentWillUnmount: function() {

  },
  _getButtonClasses: function() {
    return {
      'mdl-button': true,
      'mdl-js-button': true,
      'mdl-button--fab': this.props.fab,
      'mdl-button--colored': this.props.colored,
      'mdl-js-ripple-effect': this.props.ripple,
      'mdl-button--primary': this.props.primary,
      'mdl-button--accent': this.props.accent,
      'mdl-button--mini-fab': this.props.mini,
      'mdl-button--icon': this.props.icon && !this.props.fab && !this.props.mini,
      'mdl-button--raised': this.props.raised
    };
  },
  render: function() {
    var buttonClasses = classNames(this._getButtonClasses());
    var content;
    if (this.props.children) {
      content = this.props.children;
    } else {
      content = this.props.icon ?
                  <i className="material-icons">{this.props.icon}</i> :
                  this.props.text;

    }
    var style = {};
    if (this.props.background) {
      style.backgroundColor = this.props.background;
    }
    if (this.props.white) {
      style.color = "#fff";
    }
    if (!this.props.visible) {
      style.visibility = "hidden";
    }
    return (
      <button style={style} ref="button" className={buttonClasses} onClick={this.props.onClick}>
        {content}
      </button>
    );
  }
});

export default Button;
