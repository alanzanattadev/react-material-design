import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import Radium from 'radium';

var Card = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      shadow: "2"
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(React.findDOMNode(this.refs.card));
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var classes = classNames({
      "mdl-card": true,
      "mdl-shadow--2dp": this.props.shadow == "2",
      "mdl-shadow--3dp": this.props.shadow == "3",
      "mdl-shadow--4dp": this.props.shadow == "4",
      "mdl-shadow--6dp": this.props.shadow == "6",
      "mdl-shadow--8dp": this.props.shadow == "8",
      "mdl-shadow--16dp": this.props.shadow == "16",
    });
    if (this.props.classNames)
      classes = classes + " " + this.props.classNames;
    var styles = {
      height: this.props.height,
      width: this.props.width,
      margin: "5px",
      display: "inline-flex",
      transition: "all 1s cubic-bezier(.55,0,.1,1)"
    };
    if (this.props.background)
      styles.background = "url(" + this.props.background + ") center / cover";
    return (
      <div ref="card" className={classes} style={styles} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}));

var Title = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      heading: "4",
      expand: true
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var classes = classNames({
      "mdl-card__title": true,
      "mdl-card--expand": this.props.expand
    });
    var styles = {};
    if (this.props.background)
      styles.background = "url(" + this.props.background + ") center / cover";
    var titleClasses = classNames({
      "mdl-card__title-text": true
    });
    var titleStyles = {
      "color": this.props.white ? "#fff" : "#000"
    };
    var title;
    switch (this.props.heading) {
      case "1":
        title = (<h1 className={titleClasses} style={titleStyles}>{this.props.children}</h1>);
        break;
      case "2":
        title = (<h2 className={titleClasses} style={titleStyles}>{this.props.children}</h2>);
        break;
      case "3":
        title = (<h3 className={titleClasses} style={titleStyles}>{this.props.children}</h3>);
        break;
      case "4":
        title = (<h4 className={titleClasses} style={titleStyles}>{this.props.children}</h4>);
        break;
      case "5":
        title = (<h5 className={titleClasses} style={titleStyles}>{this.props.children}</h5>);
        break;
      case "6":
        title = (<h6 className={titleClasses} style={titleStyles}>{this.props.children}</h6>);
        break;
      default:
    }
    return (
      <div className={classes} style={styles}>
        {title}
      </div>
    );
  }
}));

var Text = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div className="mdl-card__supporting-text">
        {this.props.children}
      </div>
    );
  }
}));

var Menu = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div className="mdl-card__menu">
        {this.props.children}
      </div>
    );
  }
}));

var Action = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      border: false
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var classes = classNames({
      "mdl-card__actions": true,
      "mdl-card--border": this.props.border
    });
    var styles = {};
    if (this.props.wrapped) {
      if (this.props.wrapped !== true)
        styles.background = this.props.wrapped;
      else
        styles.background = "rgba(0, 0, 0, 0.2)";
    }
    return (
      <div className={classes} style={styles}>
        {this.props.children}
      </div>
    );
  }
}));

//export {Card, Title, Text, Menu, Action};
export default {Card: Card, Title: Title, Text:Text, Menu:Menu, Action:Action};
