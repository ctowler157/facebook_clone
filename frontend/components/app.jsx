var React = require('react');
var LoggedOutHeader = require('./headers/loggedOutHeader');
var LoggedInHeader = require('./headers/loggedInHeader');
var SessionStore = require('../stores/sessionStore');
var SessionUtil = require('../util/sessionUtil.js');
var Display = require('./display');


module.exports = React.createClass({
	getInitialState: function () {
		var loggedIn = SessionStore.isLoggedIn();
		return({loggedIn: loggedIn});
	},

	componentDidMount: function () {

		this.logInListener = SessionStore.addListener(this._onChange);
		SessionUtil.fetchCurrentUser();
		//fetch bio info??
	},

	componentWillUnmount: function () {
		this.logInListener.remove();
	},

	_onChange: function () {
		var loggedIn = SessionStore.isLoggedIn();
		this.setState({ loggedIn: loggedIn });
	},

  render: function() {
		var user = SessionStore.getCurrentUser();
		var header;
		if (user.online) {
			header = <LoggedInHeader user={ user }/>;
		} else {
			header = <LoggedOutHeader/>;
		}
    return(
      <div>
				<header>
					{ header }
				</header>
				<main>
					<Display user={ user }/>
				</main>
      </div>
   );
  }
});
