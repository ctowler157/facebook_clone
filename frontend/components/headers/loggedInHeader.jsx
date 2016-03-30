var React = require('react');
var NavButtons = require('./navButtons');

var LoggedInHeader = React.createClass({
	render: function () {
    return (
			<nav className="header-nav">
        <a href="#" className="header-nav-logo">fakebook</a>
				<NavButtons user={ this.props.user} />
      </nav>
		);
  }
});

module.exports = LoggedInHeader;
