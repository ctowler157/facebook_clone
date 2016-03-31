var React = require('react');
var LogIn = require('../forms/_logIn');
var NavButtons = require('./navButtons');

var LoggedOutHeader = React.createClass ({

	render: function () {
		return (
			<div className="logged-out-header clear-fix">
				<nav className="header-nav">
					<a href="#" className="header-nav-logo haeder-nav-left">fakebook</a>
					<LogIn />
				</nav>
			</div>
		);
	}
});
module.exports = LoggedOutHeader;
