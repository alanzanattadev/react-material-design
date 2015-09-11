import React from 'react';

function create(toast) {
    React.unmountComponentAtNode(document.getElementById("react-material-toast-container"));
    React.render(toast, document.getElementById("react-material-toast-container"));
}

export default {create: create};
