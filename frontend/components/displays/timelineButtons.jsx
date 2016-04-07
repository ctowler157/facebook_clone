var React = require('react');
var FriendRequestUtil = require('../../util/friendRequestUtil');
var FriendRequestStore = require('../../stores/friendRequestStore');

var TimelineButtons = React.createClass({
	getInitialState: function () {
		return ({ requestStatus: "none" });
	},

	componentDidMount: function () {
		this.requestListener = FriendRequestStore.addListener(this.addRequestStatus);
		FriendRequestUtil.fetchRequestsWithUser(this.props.user.id);
    console.log("Mounted!");
	},

	componentWillUnmount: function () {
		this.requestListener.remove();
	},

	addRequestStatus: function () {
		var requestStatus = FriendRequestStore.isRequested();
		this.setState({ requestStatus: requestStatus });
    console.log("Setting request status!");
	},

	handleFriendsClick: function (e) {
		e.preventDefault();
	},

	handleUpdateInfo: function (e) {
		e.preventDefault();
	},

	handleSendRequest: function (e) {
		e.preventDefault();
    var request = new FormData();
    request.append("request[target_id]", this.props.user.id);
    FriendRequestUtil.createRequest(request);
    // button inactive
	},

	handleEditRequest: function (e) {
		e.preventDefault();
	},

	handleRespond: function (e) {
		e.preventDefault();
	},

  render: function () {
    var user = this.props.user;
		var friendButton = "Friends";

		var isFriend = false;
		var currentUser = this.props.currentUser;
		this.props.friends.forEach( function (friend){
			if (friend.id == currentUser.id) {
				isFriend = true;
			}
		});

		if (isFriend) {
			friendButton = (
				<a href='#' onClick={ this.handleFriendsClick } className="header-button-friends confirmed"><img className="i1"/>Friends<img className="tri-drop"/></a>
			);
		} else if (this.props.user.id == this.props.currentUser.id){
				friendButton = (
					<a href='#' onClick={ this.handleUpdateInfo } className="header-button-friends update-info">Update Info</a>
				);
		} else {
			switch(this.state.requestStatus) {
				case "none":
					friendButton = (
						<a href='#' onClick={ this.handleSendRequest } className="header-button-request add-friend"><img className="add"/>Add Friend</a>
					);
					break;
				case "sent":
				friendButton = (
					<a href='#' onClick={ this.handleEditRequest } className="header-button-request request-sent">Friend Request Sent</a>
				);
					break;
				case "received":
				friendButton = (
					<a href='#' onClick={ this.handleRespond } className="header-button-request respond-to">Respond to request</a>
				);

					break;
			}
		}




		// <li><a href='#'>Following</a></li>
		// <li><a href='#'>Message</a></li>

		return(
			<ul className="timeline-header-buttons-list">
        <li>{ friendButton }</li>
      </ul>
		);
	}
});

module.exports = TimelineButtons;
