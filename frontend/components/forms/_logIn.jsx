var React = require('react');

var LogIn = React.createClass({
  tryLogIn: function () {},

  render: function () {

    return (
      <table cellSpacing="0" role="presentation" className="header-nav-login-form">
        <tbody className="login-form-table-body">
            <tr>
              <td>
                <label>Email or Phone</label>
              </td>
              <td>
                <label>Password</label>
              </td>
            </tr>
            <tr>
              <td>
                  <input className="login-input" type="text" name="user[email]"/>
              </td>
              <td>
                  <input className="login-input" type="password" name="user[password]"/>
              </td>
              <td>
                <button className="login-button">Log In</button>
              </td>
            </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = LogIn;
