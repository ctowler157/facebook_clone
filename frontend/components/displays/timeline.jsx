var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');
var TimelineSidebar = require('./timelineSidebar');
var TimelineHeader = require('./timelineHeader');

var UserUtil = require('../../util/userUtil');
var UserStore = require('../../stores/userStore');
var SessionStore = require('../../stores/sessionStore');
var FriendUtil = require('../../util/friendUtil');
var FriendRequestUtil = require('../../util/friendRequestUtil');
var FriendStore = require('../../stores/friendStore');
var FriendRequestStore = require('../../stores/friendRequestStore');

var Timeline = React.createClass({
	getInitialState: function () {
		return({ user: {}, currentUser: SessionStore.getCurrentUser(), friends: [] });
	},

	componentDidMount: function () {
		this.postListener = UserStore.addListener(this._onChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
		UserUtil.fetchTimelineUser(this.props.params.id);

		this.friendsListener = FriendStore.addListener(this._onFriendsChange);
		FriendUtil.fetchFriends(this.props.params.id);

		if (this.state.currentUser.id != this.props.params.id){
			this.requestsListener = FriendRequestStore.addListener(this._onRequestsChange);
		}
	},

	componentWillUnmount: function () {
		this.postListener.remove();
		this.sessionListener.remove();
		this.friendsListener.remove();

		if (this.friendRequestsListener) {
			this.requestsListener.remove();
		}
	},

	componentWillReceiveProps: function (newProps) {
		UserUtil.fetchTimelineUser(newProps.params.id);
	},

	_onChange: function () {
		var user = UserStore.getTimelineUser();
		this.setState({ user: user });
	},

	_onFriendsChange: function () {
		var friends = FriendStore.getFriendsArr();
		this.setState({ friends: friends });
	},

	_onRequestsChange: function() {},

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
          currentUser={ this.state.currentUser }
					friends={ this.state.friends }/>
        <TimelineSidebar user={ this.state.user }
          currentUser={ this.state.currentUser }
					friends={ this.state.friends }/>
        <section className="timeline-post-index">
          { /*displayString*/ }
          <PostForm
            timelineId={ this.props.params.id }
            user={ this.state.currentUser }/>
          <PostIndex timelineId={ this.props.params.id } user={ this.state.currentUser } />
        </section>
			</div>
		);
	}
});

module.exports = Timeline;
