import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

var BottomBar = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      visible: true
    }
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    var classes = classNames({
      'bottom-bar': true,
      'out': this.props.visible,
      'in': !this.props.visible
    })
    return (
      <div className={classes} style={{height: this.props.height}}>
        {this.props.children}
        <Button colored fab icon={this.props.icon} onClick={this.props.onClick}/>
      </div>
    );
  }
});

export default BottomBar;
