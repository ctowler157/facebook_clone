var React = require('react');
var PostForm = require('./forms/_postForm');
var PostIndex = require('./posts/index');

var Display = React.createClass({
	render: function () {
		var displayString = <h1>Home Page</h1>;
		if (this.props.user.online) {
			displayString = <PostForm user={ this.props.user }/>;
		}

		return(
			<section className="main-feed">
				{ displayString }
				<PostIndex/>
			</section>
		);
	}
});

module.exports = Display;