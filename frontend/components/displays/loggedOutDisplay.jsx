var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');
var ConnectWithFriends = require('./_connectWithFriends');
var	SignUp = require('../forms/_signUp');

var LoggedInDisplay = React.createClass({
	render: function () {
		return(
			<div className="signed-out-homepage">
				<section className="connect-with-friends">
					<ConnectWithFriends/>
				</section>
				<section className="sign-up-homepage">
					<SignUp/>
				</section>
			</div>
		);
	}
});

module.exports = LoggedInDisplay;
