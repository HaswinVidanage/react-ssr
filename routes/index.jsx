var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

router.get('*', function(request, response){
  var props = {title : 'Universal React App'};

  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: request.url
  }, function(error, redirectLocation, renderProps){
    if (renderProps) {
      //route has matched
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={function(Component, renderProps){
              return <Component {...renderProps} custom={props} />
          }}
        />
      );
      response.send(html);
    } else {
      console.log('in  else');
      response.status(404).send('Not Found');
    }
  });

});

module.exports = router;
