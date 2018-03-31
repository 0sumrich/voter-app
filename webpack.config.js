const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './client/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: process.env.PUBLIC_URL
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
      },
    ],
  },
  devServer: {
    historyApiFallback: true
  }
};