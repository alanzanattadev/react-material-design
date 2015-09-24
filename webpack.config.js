var path = require('path');

module.exports = {
  entry: path.join(__dirname, './tests/real/index.jsx'),
  output: {
    path: path.join(__dirname, 'www/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js(x)?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
