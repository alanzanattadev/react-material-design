import React from 'react';
import classNames from 'classnames';

var TextField = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      floating: false,
      error: false
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(this.refs.div);
  },
  componentWillUnmount: function() {

  },
  _getDivClasses: function() {
    return {
      'mdl-textfield': true,
      'mdl-js-textfield': true,
      'mdl-textfield--floating-label': this.props.floating
    };
  },
  onTextChange: function(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  },
  render: function() {
    var divClasses = classNames(this._getDivClasses());
    var type = (this.props.password && "password") || (this.props.email && "email") || (this.props.tel && "tel") || (this.props.number && "number") || "text";
    return (
      <div className={divClasses} ref="div">
        <input className="mdl-textfield__input" type={type} id={this.props.id} onChange={this.onTextChange}/>
        <label className="mdl-textfield__label" for={this.props.id}>{this.props.label}</label>
        <span className="mdl-textfield__error">{this.props.error}</span>
      </div>
    );
  }
});

export default TextField;
