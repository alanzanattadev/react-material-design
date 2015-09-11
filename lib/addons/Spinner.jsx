import React from 'react';

var Spinner = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      size: "65px"
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <svg  class="spinner" width={this.props.size} height={this.props.size}
            viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none"
                stroke-width="6" stroke-linecap="round"
                cx="33" cy="33" r="30">
        </circle>
      </svg>
    );
  }
});

export default Spinner;
