var React = require('react');
var LoggedOutHeader = require('./headers/loggedOutHeader');

module.exports = React.createClass({
  render: function() {
    return(
      <body>
        <header className="">
          <LoggedOutHeader/>
        </header>
        <h1>You have reached the root rendered by React</h1>
      </body>
   );
  }
});
