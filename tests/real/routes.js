import React from 'react';
import Router, {Route} from 'react-router';
import App from './App';
import {Spinner, ProgressBar, TextField, BottomBar} from "../../lib";

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

class BottomBarPage extends React.Component {
  render() {
    return (
      <div>
        <BottomBar/>
      </div>
    );
  }
}

var routes = (
  <Route handler={App} path="/">
    <Route handler={SpinnerPage} path="spinner"/>
    <Route handler={ProgressBarPage} path="progress"/>
    <Route handler={TextField} path="textfield"/>
    <Route handler={BottomBarPage} path="bottombar"/>
  </Route>
);

export default routes;
