import React from 'react';
import Router, {RouteHandler} from 'react-router';
import {FlexLayout} from 'react-layout-helpers';
import {NavigationLayout, ToastContainer, DialogContainer, ToastManager, Toast} from '../../lib';

var App = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div>
        <NavigationLayout header header-title="Test" header-links={[]}
                          drawer-title="Test" drawer-links={[
                            {name: "progress", href:"#/progress"},
                            {name: "textfield", href:"#/textfield"},
                            {name: "spinner", href: "#/spinner"},
                            {name: "bottombar", href: "#/bottombar"}
                          ]}>
          <FlexLayout primary="center" secondary="center" vertical height="80%">
            <RouteHandler/>
          </FlexLayout>
        </NavigationLayout>
      </div>
    );
  }
});

export default App;
