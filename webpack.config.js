var webpack = require('webpack');
var path = require ('path');

module.exports = {
  entry : './client.js',
  output : {
    path : __dirname,
    filename: './public/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx$/,
        exclude : /node_modules/,
        loader : 'babel-loader',
        query : {
          presets : ['react']
        }
      }
    ]
  }
};
