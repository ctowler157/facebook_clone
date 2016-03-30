var React = require('react');
var AuthUtil = require('../../util/authUtil.js');

var NavButtons = React.createClass({
	logOut: function () {
		AuthUtil.logOut();
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
