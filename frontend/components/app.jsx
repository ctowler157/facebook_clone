var React = require('react');
var LoggedOutHeader = require('./headers/loggedOutHeader');
var LoggedInHeader = require('./headers/loggedInHeader');
var SessionStore = require('../stores/sessionStore');
var SessionUtil = require('../util/sessionUtil.js');
var LoggedInDisplay = require('./displays/loggedInDisplay');
var LoggedOutDisplay = require('./displays/loggedOutDisplay');


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
		var display;
		var mainString;
		if (user.online) {
			header = <LoggedInHeader user={ user }/>;
			display = <LoggedInDisplay user={ user }/>;
			mainString = this.props.children || display;
		} else {
			header = <LoggedOutHeader/>;
			display = <LoggedOutDisplay/>;
			mainString = display;
		}
    return(
      <div className="whole-page clear-fix">
				<header>
					{ header }
				</header>
					<main className="main">
						{ mainString }
					</main>
      </div>
   );
  }
});
