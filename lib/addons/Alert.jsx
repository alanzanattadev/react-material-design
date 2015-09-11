import React from 'react/addons';
import Card from '../Card';
import Button from '../Button';

var Alert = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
  },
  getDefaultProps: function() {
    return {
      onPositiveClick: function() {},
      onNegativeClick: function() {},
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  hide: function() {
    this.setState(React.addons.update(this.state, {
      visible: {$set: false}
    }));
  },
  onPositiveClick: function() {
    this.hide();
    this.props.onPositiveClick();
  },
  onNegativeClick: function() {
    this.hide();
    this.props.onNegativeClick();
  },
  render: function() {
    return (
      <div style={{
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
        visibility: this.state.visible ? "visible" : "hidden"
      }}>
        <Card.Card>
          <Card.Title>
            {this.props.title}
          </Card.Title>
          {this.props.children}
          <Card.Action>
            <Button ripple colored text={this.props.negative} onClick={this.onNegativeClick}/>
            <Button ripple colored text={this.props.positive} onClick={this.onPositiveClick}/>
          </Card.Action>
        </Card.Card>
      </div>
    );
  }
});

export default Alert;
