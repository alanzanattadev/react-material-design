import React from 'react';

function destroy() {
  React.unmountComponentAtNode(document.getElementById("react-material-dialog-container"));
}

function create(component) {
  destroy();
  React.render(component, document.getElementById("react-material-dialog-container"));
}


export default {create: create, destroy: destroy};
