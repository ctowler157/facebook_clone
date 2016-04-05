var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');
var UserUtil = require('../../util/userUtil');
var UserStore = require('../../stores/userStore');
var TimelineSidebar = require('./timelineSidebar');
var TimelineHeader = require('./timelineHeader');
var SessionStore = require('../../stores/sessionStore');

var Timeline = React.createClass({
	getInitialState: function () {
		return({ user: {}, currentUser: SessionStore.getCurrentUser() });
	},

	componentDidMount: function () {
		this.postListener = UserStore.addListener(this._onChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
		UserUtil.fetchTimelineUser(this.props.params.id);
	},

	componentWillUnmount: function () {
		this.postListener.remove();
	},

	componentWillReceiveProps: function (newProps) {
		UserUtil.fetchTimelineUser(newProps.params.id);
	},

	_onChange: function () {
		var user = UserStore.getTimelineUser();
		this.setState({ user: user });
	},

	_onSessionChange: function () {
		var user = SessionStore.getCurrentUser();
		this.setState({ currentUser: user });
	},

  render: function () {
    // var displayString = "";
    // if (this.state.currentUser.id == this.props.params.id) {
		// 	displayString = <PostForm
    //     timelineId={this.props.params.id }
    //     user={ this.props.user }/>;
		// }

		return(
			<div>
        <TimelineHeader user={ this.state.user }
          currentUser={ this.state.currentUser }/>
        <TimelineSidebar user={ this.state.user }
          currentUser={ this.state.currentUser }/>
        <section className="timeline-post-index">
          { /*displayString*/ }
          <PostForm
            timelineId={this.props.params.id }
            user={ this.props.user }/>
          <PostIndex timelineId={ this.props.params.id } user={ this.state.currentUser } />
        </section>
			</div>
		);
	}
});

module.exports = Timeline;
