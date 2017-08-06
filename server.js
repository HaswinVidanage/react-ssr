require('babel-register')({
  presets : ['react']
});

var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

var app =  express();

app.use(express.static('public'));

app.get('/', function(request, response){
  var props = {title : 'Universal React App'};
  var html = ReactDOMServer.renderToString(
    React.createElement(Component, props)
  );
  response.send(html);
});

var PORT = 3000;
app.listen(PORT, function(){
  console.log('http://localhost:'+PORT);
});
