var React = require('react');
var LogIn = require('../forms/_logIn');

var LoggedOutHeader = React.createClass({

  render: function () {

    return (
      <nav className="header-nav">
        <a href="#" className="header-nav-logo">fakebook</a>
        <LogIn />
      </nav>);
  }
});

module.exports = LoggedOutHeader;
