var React = require('react');

var Component = React.createClass({

  _handleClick : function(){
    alert('Button clicked!');
  },
  render : function(){
    return (
        <html>
          <head>
            <title>Universal App with React</title>
            <link rel='stylesheet' href='/style.css'/>
          </head>
          <body>
            <div>
              <h1>jsx component heading</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button onClick={this._handleClick}>Click Me</button>
            </div>
            <script src ='/bundle.js'/>
          </body>
        </html>

    );
  }
});

module.exports = Component;
