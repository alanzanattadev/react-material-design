import React from 'react/addons';
import Router, {Route} from 'react-router';
import App from './App';
import {Spinner, ProgressBar, TextField, BottomBar, Button, AlertManager, Alert} from "../../lib";

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
    this.setState(React.addons.update(this.state, {
      visible: {$set: !this.state.visible}
    }));
  },
  toggleLoading: function() {
    this.setState(React.addons.update(this.state, {
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
  render: function() {
    return (
      <Button onClick={this.showAlert} text="show"/>
    );
  }
});

var routes = (
  <Route handler={App} path="/">
    <Route handler={SpinnerPage} path="spinner"/>
    <Route handler={ProgressBarPage} path="progress"/>
    <Route handler={TextField} path="textfield"/>
    <Route handler={BottomBarPage} path="bottombar"/>
    <Route handler={AlertPage} path="alert"/>
  </Route>
);

export default routes;
