var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');
var UserUtil = require('../../util/userUtil');
var UserStore = require('../../stores/userStore');

var Timeline = React.createClass({
	getInitialState: function () {
		return({ user: {} });
	},

	componentDidMount: function () {
		this.postListener = UserStore.addListener(this._onChange);
		UserUtil.fetchTimelineUser(this.props.params.id);
	},

	componentWillUnmount: function () {
		this.postListener.remove();
	},

	_onChange: function () {
		var user = UserStore.getTimelineUser();
		this.setState({ user: user });
	},

  render: function () {
		return(
			<div>
        <header className="timeline-header">This will be the header with the photo
				Here's the user { this.state.user.last_name }</header>
        <section className="timeline-sidebar">this will be the sidebar</section>
        <section className="timeline-post-index">this will be the posts</section>
			</div>
		);
	}
});

module.exports = Timeline;
