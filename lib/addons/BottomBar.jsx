import React from 'react';
import classNames from 'classnames';
import Radium, {Style} from 'radium';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import Styles from '../styles';

var BottomBar = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      visible: true,
      loading: false
    }
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    var styles = {
      bottombar: {
        height: this.props.height || "100px",
        position: "fixed",
        left: "0",
        bottom: "-100",
        width: "100%",
        backgroundColor: Styles.Colors.Main,
        transition: "1s" + " " + Styles.Animations.Curve,
        transform: "translate3d(0, 100px, 0)",
      },
      out: {
        transform: "translate3d(0, -100px, 0)",
      },
      fabButton: {
        position: "absolute",
        top: "-28",
        right: "25",
        transition: "1s" + " " + Styles.Animations.Curve,
        transitionDelay: "0.25s",
        transform: !this.props.visible && "translate3d(0, 200px, 0)",
      }
    };
    return (
      <div className="react-material-design-BottomBar" style={[styles.bottombar, this.props.visible && styles.out]}>
        <Style scopeSelector=".react-material-design-BottomBar" rules={{"button:first-of-type": styles.fabButton}}/>
        <Button colored fab icon={this.props.icon} onClick={this.props.onClick}/>
        <div style={{width: "100%", visibility: this.props.loading ? "visible": "hidden", position: "absolute", top: "0", zIndex: "-1"}}>
          <ProgressBar width="100%"/>
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default Radium(BottomBar);
