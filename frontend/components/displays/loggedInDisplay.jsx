var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');

var LoggedInDisplay = React.createClass({
	render: function () {
		var displayString = <h1>Home Page</h1>;
		if (this.props.user.online) {
			displayString = <PostForm user={ this.props.user }/>;
		}

		return(
			<div>
				<section className="main-sidebar-left ">
					<h3>There's stuff in this sidebar</h3>
				</section>
				<section className="main-feed">
					{ displayString }
					<PostIndex user={ this.props.user }/>
				</section>
				<section className="main-sidebar-right"></section>
			</div>
		);
	}
});

module.exports = LoggedInDisplay;
