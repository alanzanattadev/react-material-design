import React from 'react';
import classNames from 'classnames';
import Button from './Button';

var NavigationLayout = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      "header": false,
      "drawer": true,
      "drawer-links": [],
      "scroll": false,
      "fixed-header": true,
      "fixed-drawer": false
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(React.findDOMNode(this.refs.layout));
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var headerClasses = classNames({
      "mdl-layout__header": true,
      "mdl-layout__header--scroll": this.props.scroll
    });

    var layoutClasses = classNames({
      "mdl-layout": true,
      "mdl-js-layout": true,
      "mdl-layout--fixed-header": this.props["fixed-header"],
      "mdl-layout--fixed-drawer": this.props["fixed-drawer"],
      "mdl-layout--overlay-drawer-button": !this.props.header
    });

    return (
      <div ref="layout" className={layoutClasses}>
        {this.props.header ?
        <header className={headerClasses} style={{}}>
          <div className="mdl-layout-icon"></div>
          <div className="mdl-layout__header-row">
            {this.props["header-icon"]
            ?
              [<div className="mdl-layout-spacer" key="spacer-1"></div>,
              <img key="img-1" src={this.props["header-icon"]} style={this.props["header-icon-style"]} onClick={this.props["header-icon-onClick"]}/>,
              <div key="spacer-2" className="mdl-layout-spacer"></div>]
            :
              [<span key="title-1" className="mdl-layout-title">{this.props["header-title"]}</span>,
              <div key="spacer-1" className="mdl-layout-spacer"></div>]
            }
            {this.props["header-links"] ? (
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              {this.props["header-links"].map(function(link, index) {
                if (link.href)
                  return (<a className="mdl-navigation__link" href={link.href} key={"header-" + index}>{link.name}</a>);
                else if (link.onClick)
                  return (<Button ripple onClick={link.onClick} key={"header-" + index} text={link.name}/>)
              })}
            </nav>
            ) : undefined}
          </div>
        </header>
        : null}
        { this.props.drawer ?
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.props["drawer-title"]}</span>
          <nav className="mdl-navigation">
            {this.props["drawer-links"].map(function(link, index) {
              if (link.href)
                return (<a className="mdl-navigation__link" href={link.href} onClick={link.onClick} key={"drawer-" + index}>{link.name}</a>);
              else
                return (<Button ripple onClick={link.onClick} key={"drawer-" + index} text={link.name}/>)
            })}
          </nav>
        </div>
        : null }
        <main className="mdl-layout__content">
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default NavigationLayout;
