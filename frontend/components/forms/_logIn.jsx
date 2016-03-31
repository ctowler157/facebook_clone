var React = require('react');
var SessionUtil = require('../../util/sessionUtil.js');
var ApiUtil = require('../../util/apiUtil.js');

var LogIn = React.createClass({
	getInitialState: function () {
		return { email: "", password: "" };
	},

	updateEmail: function (event) {
		this.setState({ email: event.currentTarget.value });
	},

	updatePassword: function (event) {
		this.setState({ password: event.currentTarget.value });
	},

	handleClick: function (e) {
		if(this.state.email !== "" && this.state.password !== ""){
			this.tryLogIn();
		}
	},

  tryLogIn: function () {
		var formData = new FormData();
		formData.append("user[email]", this.state.email);
		formData.append("user[password]", this.state.password);
		// formData.append("authenticity_token", ApiUtil._getAuthToken());

		SessionUtil.tryLogIn(formData);
	},

  render: function () {
    return (
      <table cellSpacing="0" role="presentation" className="header-nav-right login-form">
        <tbody className="login-form-table-body">
            <tr>
              <td>
                <label>Email or Phone</label>
              </td>
              <td>
                <label>Password</label>
              </td>
            </tr>
            <tr className="input-label-row">
              <td>
                  <input className="login-input" type="text" name="user[email]" value={this.state.email} onChange={this.updateEmail}/>
              </td>
              <td>
                  <input className="login-input" type="password" name="user[password]" value={this.state.password} onChange={this.updatePassword}/>
              </td>
              <td>
                <button className="login-button" onClick={this.handleClick}>Log In</button>
              </td>
            </tr>
            <tr className="remember-me-row">
              <td>
								<label className="remember-me-label">
									<input type="checkbox" name="persistent" value="1"/>
									Keep me logged in
								</label>
              </td>
              <td>
								<a className="forgot-password" href="#">Forgot your password?</a>
              </td>
            </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = LogIn;
