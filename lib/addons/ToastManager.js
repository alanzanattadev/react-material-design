import React from 'react';
import ReactDOM from 'react-dom';

function create(toast) {
    ReactDOM.render(<div/>, document.getElementById("react-material-toast-container"));
    ReactDOM.render(toast, document.getElementById("react-material-toast-container"));
}

export default {create: create};
