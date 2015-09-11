import React from 'react';

function create(component) {
    React.unmountComponentAtNode(document.getElementById("react-material-dialog-container"));
    React.render(component, document.getElementById("react-material-dialog-container"));
}

export default {create: create};
