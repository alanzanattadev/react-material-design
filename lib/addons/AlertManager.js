import React from 'react';
import ReactDOM from 'react-dom';

function create(component) {
  ReactDOM.render(<div/>, document.getElementById("react-material-dialog-container"));
  ReactDOM.render(component, document.getElementById("react-material-dialog-container"));
}


export default {create: create};
