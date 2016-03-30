var React = require('react');
var LoggedOutHeader = require('./headers/loggedOutHeader');
var LoggedInHeader = require('./headers/loggedInHeader');
var AuthStore = require('../stores/authStore');
var Display = require('./display');


module.exports = React.createClass({
	getInitialState: function () {
		var loggedIn = AuthStore.isLoggedIn();
		return({loggedIn: loggedIn});
	},

	componentDidMount: function () {
		this.logInListener = AuthStore.addListener(this._onChange);
		//fetch bio info??
	},

	componentWillUnmount: function () {
		this.logInListener.remove();
	},

	_onChange: function () {
		var loggedIn = AuthStore.isLoggedIn();
		this.setState({ loggedIn: loggedIn });
	},

  render: function() {
		var user = AuthStore.getCurrentUser();
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
