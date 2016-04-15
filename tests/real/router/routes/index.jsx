import React from 'react';
import update from 'react-addons-update'
import {Route} from 'react-router';
import {Spinner, ProgressBar, TextField, BottomBar, Button, AlertManager, Alert, Toast, ToastManager, ToastContainer, DialogContainer, NavigationLayout} from "../../../../lib";
import {FlexLayout} from 'react-layout-helpers'

class SpinnerPage extends React.Component {
  render() {
    return (
      <div>
        <Spinner active/>
        <Spinner active multicolor/>
      </div>
    );
  }
}

class ProgressBarPage extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar progress="50"/>
        <br/>
        <ProgressBar progress="80"/>
        <br/>
        <ProgressBar progress="60" buffer="75"/>
        <br/>
        <ProgressBar progress="60" buffer="90"/>
        <br/>
        <ProgressBar/>
        <br/>
        <ProgressBar width="200px"/>
      </div>
    );
  }
}

var BottomBarPage = React.createClass({
  getInitialState: function() {
    return {
      visible: false,
      loading: false
    };
  },
  toggleVisible: function() {
    this.setState(update(this.state, {
      visible: {$set: !this.state.visible}
    }));
  },
  toggleLoading: function() {
    this.setState(update(this.state, {
      loading: {$set: !this.state.loading}
    }));
  },
  render: function() {
    return (
      <div>
        <Button onClick={this.toggleVisible} text="show"/>
        <Button onClick={this.toggleLoading} text="load"/>
        <BottomBar loading={this.state.loading} visible={this.state.visible}/>
      </div>
    );
  }
});

var AlertPage = React.createClass({
  showAlert: function() {
    AlertManager.create(<Alert title="Do you really want to exit ?" positive="ok"/>);
  },
  showAlertWithSpinner: function() {
    AlertManager.create(
      <Alert title="Do you really want to exit ?" loading/>
    );
  },
  render: function() {
    return (
      <div>
        <Button onClick={this.showAlert} text="show"/>
        <Button onClick={this.showAlertWithSpinner} text="show spinner"/>
      </div>
    );
  }
});

var ToastPage = React.createClass({
  showToast: function() {
    ToastManager.create(<Toast text="Salut"/>)
  },
  render: function() {
    return (
      <div>
        <Button onClick={this.showToast} text="show"/>
      </div>
    )
  }
})

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
                            {name: "progress", href:"/progress"},
                            {name: "textfield", href:"/textfield"},
                            {name: "spinner", href: "/spinner"},
                            {name: "bottombar", href: "/bottombar"},
                            {name: "alert", href: "/alert"},
                            {name: "toast", href: "/toast"}
                          ]}>
          <FlexLayout primary="center" secondary="center" vertical height="80%">
            {this.props.children}
          </FlexLayout>
        </NavigationLayout>
        <DialogContainer/>
        <ToastContainer/>
      </div>
    );
  }
});

var routes = (
  <Route component={App} path="/">
    <Route component={SpinnerPage} path="spinner"/>
    <Route component={ProgressBarPage} path="progress"/>
    <Route component={TextField} path="textfield"/>
    <Route component={BottomBarPage} path="bottombar"/>
    <Route component={AlertPage} path="alert"/>
    <Route component={ToastPage} path="toast"/>
  </Route>
);

export default routes;
