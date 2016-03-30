var React = require('react');
var LogIn = require('../forms/_logIn');
var NavButtons = require('./navButtons');
// var AuthStore = require('../../stores/authStore');

//
// var Header = React.createClass({
// 	getInitialState: function () {
// 		var loggedIn = AuthStore.isLoggedIn();
// 		return({loggedIn: loggedIn});
// 	},
//
// 	componentDidMount: function () {
// 		this.logInListener = AuthStore.addListener(this._onChange);
// 		//fetch bio info??
// 	},
//
// 	componentWillUnmount: function () {
// 		this.logInListener.remove();
// 	},
//
// 	_onChange: function () {
// 		var loggedIn = AuthStore.isLoggedIn();
// 		this.setState({ loggedIn: loggedIn });
// 	},
//
//   render: function () {
// 		var navItem = "";
//
// 		if (this.state.loggedIn) {
// 			var user = AuthStore.getCurrentUser();
// 			navItem = <NavButtons user={user}/>;
// 		} else {
// 			navItem = <LogIn />;
// 		}
//
//     return (
//       <nav className="header-nav">
//         <a href="#" className="header-nav-logo">fakebook</a>
// 				{ navItem }
//       </nav>);
//   }
// });
var LoggedOutHeader = React.createClass ({

	render: function () {
		return (
			<nav className="header-nav">
				<a href="#" className="header-nav-logo">fakebook</a>
				<LogIn />
			</nav>);
	}
});
module.exports = LoggedOutHeader;
