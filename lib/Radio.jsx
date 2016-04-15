import React from 'react';
import classNames from 'classnames';

var Radio = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      ripple: true,
      disabled: false
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(this.refs.label);
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var classes = classNames({
      "mdl-radio": true,
      "mdl-js-radio": true,
      "mdl-js-ripple-effect": this.props.ripple
    })
    return (
      <label className={classes} for={this.props.id} ref="label" onClick={this.props.onClick}>
        <input className="mdl-radio__button" id={this.props.id} name={this.props.name} type="radio" value={this.props.value} disabled={this.props.disabled} checked={this.props.checked} onChange={this.props.onChange}/>
        <span className="mdl-radio__label">{this.props.text}</span>
      </label>
    );
  }
});

export default Radio;
