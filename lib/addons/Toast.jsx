import React from 'react';
import update from 'react-addons-update';
import classNames from 'classnames';
import Button from '../Button';
import Radium from 'radium';

var Toast = React.createClass({
  getInitialState: function() {
    return {
      visible: false
    };
  },
  getDefaultProps: function() {
    return {
      onCreated: function() {},
      onClose: function() {}
    };
  },
  componentDidMount: function() {
    this.props.onCreated();
    setTimeout(() => {
      this.setState(update(this.state, {
        visible: {$set: true}
      }));
    }, 10);
    this.timeoutHandler = this.timeout();
  },
  componentWillUnmount: function() {
    clearTimeout(this.timeoutHandler);
  },
  timeout: function() {
    return setTimeout(this.hide, 4000);
  },
  hide: function() {
    this.setState(update(this.state, {
      visible: {$set: false}
    }));
    this.props.onClose();
  },
  render: function() {
    return (
      <div style={{
        minHeight: "48px",
        maxHeight: "80px",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        zIndex: "10"
      }}>
        <div style={{
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
        }}
        >
          <span style={{marginLeft: "25px"}}>{this.props.text}</span>
          <span style={{flexGrow: "1"}}></span>
          <Button accent text={this.props.button ? this.props.button.toUpperCase(): ""} onClick={this.props.onClick} visible={this.props.button}/>
          <span style={{width: "15px", flexBasis:"15px", flexGrow: "0"}}/>
        </div>
      </div>
    );
  }
});

export default Radium(Toast);
