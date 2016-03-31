var React = require('react');

var SignUp = React.createClass({

	_handleSubmit: function (event) {
		event.preventDefault();
		// var formData = $(this.signUpForm).serialize();
		
	},

	render: function () {


		return (
			<div className="sign-up-form">
				<form ref="signUpForm" onSubmit={ this._handleSubmit} >
					<input className="first-name-input" type="text" name="user[first_name]"/>

					<input className="last-name-input" type="text" name="user[last_name]"/>

					<input className="email-input" type="text" name="user[email]"/>

					<input className="email-verify-input" type="text" name="user[email_verify]"/>

					<input className="password-input" type="password" name="user[password]"/>

					<input className="sign-up-button" type="submit">Sign Up</input>
				</form>
			</div>
		);
	}
});

module.exports = SignUp;
