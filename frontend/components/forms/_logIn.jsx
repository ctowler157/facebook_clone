var React = require('react');
var SessionUtil = require('../../util/sessionUtil.js');
var ApiUtil = require('../../util/apiUtil.js');
var Modal = require('react-modal');

var LogIn = React.createClass({
	getInitialState: function () {
		return { email: "", password: "", loginFailed: false };
	},

  componentDidMount: function () {
    this.refs.emailInput.focus();
  },

	updateEmail: function (event) {
		this.setState({ email: event.currentTarget.value });
	},

	updatePassword: function (event) {
		this.setState({ password: event.currentTarget.value });
	},

	handleSubmit: function (e) {
		if(this.state.email !== "" && this.state.password !== ""){
			this.tryLogIn();
		} else {
		  if (this.state.email !=="") {
        this.refs.passwordInput.focus();
      }
		}
	},

  keyPress: function (event) {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  },

  tryLogIn: function () {
		var formData = new FormData();
		formData.append("user[email]", this.state.email);
		formData.append("user[password]", this.state.password);
		// formData.append("authenticity_token", ApiUtil._getAuthToken());

		SessionUtil.tryLogIn(formData, this.failLogin);
	},

  forgotPassword: function (event) {
    event.preventDefault();
  },

  failLogin: function () {
    this.setState({ loginFailed: true });
  },

  closeLoginFailed: function () {
    this.setState({ loginFailed: false });
  },

  render: function () {
    var noFeatureModalStyle = {
      content : {
        padding                 : '20px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius            : '3px'
      }
    };

    var loginFailed = (
      <Modal
        isOpen={this.state.loginFailed}
        onRequestClose={this.closeLoginFailed}
        style={noFeatureModalStyle} >
        <p className="modal-text">Login failed!!</p>
      </Modal>
    );
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
                  <input ref="emailInput" className="login-input" type="text"
                    name="user[email]" value={this.state.email}
                    onKeyDown={ this.keyPress } onChange={this.updateEmail}/>
              </td>
              <td>
                  <input ref="passwordInput" className="login-input" type="password"
                    name="user[password]" value={this.state.password}
                    onKeyDown={ this.keyPress } onChange={this.updatePassword}/>
              </td>
              <td>
                <button className="login-button blue-button" onClick={this.handleSubmit}>Log In</button>
                { loginFailed }
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
								<a className="forgot-password" href="#" onClick={ this.forgotPassword }>Forgot your password?</a>
              </td>
            </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = LogIn;
