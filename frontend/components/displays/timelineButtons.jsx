var React = require('react');
var FriendRequestUtil = require('../../util/friendRequestUtil');
var FriendRequestStore = require('../../stores/friendRequestStore');
var FriendUtil = require('../../util/friendUtil');
// var FriendStore = require('../../stores/friendStore');

var TimelineButtons = React.createClass({
	getInitialState: function () {
		return ({ requestStatus: "no request", friendshipId: "no friendship" });
	},

	componentDidMount: function () {
    // this.friendsListener = FriendStore.addListener(this.addFriends);
    // FriendUtil.fetchFriends(this.props.userId);
    if (this.props.userId != this.props.currentUser.id){
      this.requestListener = FriendRequestStore.addListener(this.addRequestStatus);
      FriendRequestUtil.fetchRequestsWithUser(this.props.userId);
    }
	},

	componentWillUnmount: function () {
		if (this.requestListener) {
      this.requestListener.remove();
    }
    // this.friendsListener.remove();
	},

	addRequestStatus: function () {
		var requestStatus = FriendRequestStore.isRequested(this.props.userId);
		this.setState({ requestStatus: requestStatus });
	},

  getFriendshipId: function(newProps) {
    var friendshipId = "no friendship";
    var user = this.props.currentUser;

    newProps.friends.forEach( function (friend) {
      if (friend.id == user.id) {
        friendshipId = friend.friendshipId;
      }
    });

    return friendshipId;
  },

  // addFriends: function () {
  //   var friends = FriendStore.getFriendsArr();
  //   var friendshipId = FriendStore.getFriendshipId(this.props.currentUser.id);
  //   this.setState({ friends: friends, friendshipId: friendshipId });
  // },
  componentWillReceiveProps: function (newProps) {
    if (this.props.userId != this.props.currentUser.id){
      var friendshipId = this.getFriendshipId(newProps);
      this.setState({ friendshipId: friendshipId });
    }
  },

	handleFriendsClick: function (e) {
		e.preventDefault();
    // form to choose
    FriendUtil.removeFriend(this.state.friendshipId);
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
    var req = FriendRequestStore.getRequest();
    // form to select response
    var response = new FormData();
    response.append("request[accepted]", true);
    FriendRequestUtil.updateRequest(response, req.id);
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
				case "no request":
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
