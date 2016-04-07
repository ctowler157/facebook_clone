var React = require('react');
var SessionUtil = require('../../util/sessionUtil.js');
var SessionStore = require('./../../stores/sessionStore');

var NavButtons = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },

	prevDef: function (e) {
		e.preventDefault();
	},


	logOut: function () {
    // var router = this.context.router;

    SessionUtil.logOut();

    // SessionUtil.logOut(function () {
    //   router.push("/");
    // });


	},

	render: function () {
		var user = this.props.user;

		return(
			<ul className="header-nav-right nav-buttons">
				<li><a className="left-buttons" href={ "#/user/" + user.id }>{ user.first_name }</a></li>
				<li><a className="left-buttons home-button" href={ "#/" }>Home</a></li>
				<li className="empty-li"></li>
				<li>
					<a href="#/requests" className="notis requests-button"
						onClick={ this.prevDef }></a>
				</li>
				<li>
					<a href="#/messages" className="notis messages-button"
						onClick={ this.prevDef }></a>
				</li>
				<li>
					<a href="#/notifications" className="notis notifications-button"
						onClick={ this.prevDef }></a>
				</li>
				<li><button type="button" className="blue-button" onClick={ this.logOut }>Log Out</button></li>
			</ul>
		);
	}
});

module.exports = NavButtons;
