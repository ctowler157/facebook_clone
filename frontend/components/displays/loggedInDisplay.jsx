var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');

var LoggedInDisplay = React.createClass({
	render: function () {
		var displayString = <h1>Home Page</h1>;
		if (this.props.user.online) {
			displayString = <PostForm
        timelineId={ this.props.user.userId }
        user={ this.props.user }/>;
		}

		return(
			<div>
				<section className="main-sidebar-left clear-fix">
					<h3>There's stuff in
            this sidebar</h3>
          <br/>
					<h3>There's stuff in
            this sidebar</h3>
          <br/>
					<h3>There's stuff in
            this sidebar</h3>
				</section>
				<section className="main-feed">
					{ displayString }
					<PostIndex user={ this.props.user }/>
				</section>
				<section className="main-sidebar-right clear-fix">
          <h3>There might be stuff in this sidebar too</h3></section>
			</div>
		);
	}
});

module.exports = LoggedInDisplay;
