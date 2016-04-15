import React from 'react';
import classNames from 'classnames';

var ProgressBar = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      progress: false,
      buffer: false
    };
  },
  componentDidMount: function() {
    componentHandler.upgradeElement(this.refs.bar);
    this.setProgress();
  },
  componentDidUpdate: function() {
    this.setProgress();
  },
  componentWillUnmount: function() {
    React.findDOMNode(this.refs.bar).removeEventListener('mdl-componentupgraded', this.setProgress);
  },
  setProgress: function() {
    var progressBar = React.findDOMNode(this.refs.bar)
    if (this.props.progress) {
      progressBar.MaterialProgress.setProgress(80);
      progressBar.MaterialProgress.setProgress(parseInt(this.props.progress));
      if (this.props.buffer)
        progressBar.MaterialProgress.setBuffer(parseInt(this.props.buffer));
    }
  },
  _getBarClasses: function() {
    return classNames({
      "mdl-progress": true,
      "mdl-js-progress": true,
      "mdl-progress__indeterminate": !this.props.progress
    });
  },
  _getBarStyle: function() {
    return {
      width: this.props.width || "250px"
    };
  },
  render: function() {
    return (
      <div ref="bar" className={this._getBarClasses()} style={this._getBarStyle()}></div>
    );
  }
});

export default ProgressBar;
