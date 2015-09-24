import React from 'react';
import classNames from 'classnames';

var Spinner = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {

    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(React.findDOMNode(this.refs.spinner));
  },
  componentWillUnmount: function() {

  },
  _getSpinnerStyle: function() {
    return classNames({
      "mdl-spinner": true,
      "mdl-js-spinner": true,
      "mdl-spinner--single-color": !this.props.multicolor,
      "is-active": this.props.active
    });
  },
  render: function() {
    return (
      <div ref="spinner" className={this._getSpinnerStyle()}/>
    );
  }
});

export default Spinner;
