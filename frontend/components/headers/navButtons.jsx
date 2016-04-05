var React = require('react');
var SessionUtil = require('../../util/sessionUtil.js');
var SessionStore = require('./../../stores/sessionStore');

var NavButtons = React.createClass({
	logOut: function () {
		SessionUtil.logOut();
	},

	render: function () {
		return(
			<ul className="header-nav-right nav-buttons">
				<li><h3>Welcome, { this.props.user.first_name }</h3></li>
				<li><button type="button" className="blue-button" onClick={ this.logOut }>Log Out</button></li>
			</ul>
		);
	}
});

module.exports = NavButtons;
