import React from 'react/addons';
import Radium from 'radium';
import Card from '../Card';
import Button from '../Button';
import Styles from '../styles';
import Spinner from '../Spinner';
import AlertManager from './AlertManager';
import {FlexLayout} from 'react-layout-helpers';

var Alert = React.createClass({
  getInitialState: function() {
    return {
      visible: true,
      loaded: false
    };
  },
  getDefaultProps: function() {
    return {
      onPositiveClick: function() {},
      onNegativeClick: function() {},
    };
  },
  componentDidMount: function() {
    setTimeout(() => {
      this.setState(React.addons.update(this.state, {
        loaded: {$set: true}
      }), 40);
    })
  },
  componentWillUnmount: function() {

  },
  hide: function() {
    this.setState(React.addons.update(this.state, {
      visible: {$set: false}
    }));
    setTimeout(function() {
      AlertManager.destroy();
    }, 300);
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
    var actions;
    if (this.props.negative && this.props.positive) {
      actions = (
        <Card.Action right>
          <Button ripple colored text={this.props.negative} onClick={this.onNegativeClick}/>
          <Button ripple colored text={this.props.positive} onClick={this.onPositiveClick}/>
        </Card.Action>
      );
    } else if (this.props.positive) {
      actions = (
        <Card.Action right>
          <Button ripple colored text={this.props.positive} onClick={this.onPositiveClick}/>
        </Card.Action>
      );
    }
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
        transition: "all 0.3s " + Styles.Animations.Curve,
        opacity: this.state.loaded && this.state.visible ? "1" : "0",
        visibility: this.state.visible ? "visible" : "hidden"
      }}>
        <div style={{transition: "all 0.5s " + Styles.Animations.Curve, transform: this.state.loaded && this.state.visible ? "translate3d(0, -20px, 0)" : undefined}}>
          <Card.Card>
            <h6 className="mdl-typography--headline" style={{color: "#777", fontSize:"18px", marginLeft:"15px"}}>{this.props.title}</h6>
            {this.props.children || (this.props.loading ? (
              [(<FlexLayout primary="center" secondary="center" vertical flex="2" key="flex2">
                <Spinner active/>
              </FlexLayout>),
              (<FlexLayout flex="1" key="flex1"/>)]
            ) : undefined) || <FlexLayout flex="1"/>}
            {actions}
          </Card.Card>
        </div>
      </div>
    );
  }
});

export default Radium(Alert);
