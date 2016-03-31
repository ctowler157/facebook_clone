var React = require('react');
var SessionUtil = require('../../util/sessionUtil.js');

var NavButtons = React.createClass({
	logOut: function () {
		SessionUtil.logOut();
	},
	render: function () {
		return(
			<div>
				<h3>Welcome, { this.props.user.email }</h3>
				<button type="button" onClick={ this.logOut }>Log Out</button>
			</div>
		);
	}
});

module.exports = NavButtons;
