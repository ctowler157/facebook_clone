var React = require('react');
var FriendRequestUtil = require('../../util/friendRequestUtil');
var FriendRequestStore = require('../../stores/friendRequestStore');
var FriendUtil = require('../../util/friendUtil');
var Modal = require('react-modal');

var TimelineButtons = React.createClass({
	getInitialState: function () {
    FriendRequestStore.setRequestStatus(this.props.userId, this.props.currentUserId);
    var requestStatus = FriendRequestStore.isRequested(this.props.userId);
		return ({ requestStatus: requestStatus, friendshipId: "no friendship",
      editingBio: false });
	},

	componentDidMount: function () {
    if (this.props.userId != this.props.currentUser.id){
      this.requestListener = FriendRequestStore.addListener(this.addRequestStatus);
    }
    this.addRequestStatus();
	},

	componentWillUnmount: function () {
		if (this.requestListener) {
      this.requestListener.remove();
    }
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

	_handleUpdateInfo: function (e) {
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

  openNoFeature: function (e) {
    e.preventDefault();
    this.setState({ noFeature: true });
  },
  closeNoFeature: function (e) {
    this.setState({ noFeature: false });
  },

  // _openEdit: function (e) {
  //   e.preventDefault();
  //   this.setState({ editingBio: true });
  // },
  //
  // _closeEdit: function () {
  //   // e.preventDefault();
  //   this.setState({ editingBio: false });
  // },

  render: function () {
    var user = this.props.user;
		var friendButton = "Friends";

    var noFeatureModalStyle = {
      content : {
        padding                 : '20px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius            : '3px'
      }
    };
    var noFeature = (
      <Modal
        isOpen={this.state.noFeature}
        onRequestClose={this.closeNoFeature}
        style={noFeatureModalStyle} >
        <p className="modal-text">This feature is coming soon!</p>
      </Modal>
    );

		var isFriend = false;
		var currentUser = this.props.currentUser;
		this.props.friends.forEach( function (friend){
			if (friend.id == currentUser.id) {
				isFriend = true;
			}
		});

		if (isFriend) {
			friendButton = (
				<a href='#' onClick={ this.openNoFeature } className="header-button-friends confirmed"><img className="i1"/>Friends<img className="tri-drop"/></a>
			);
		} else if (this.props.user.id == this.props.currentUser.id){
				friendButton = (
					<a href='#' onClick={ this.openNoFeature } className="header-button-friends update-info">Update Info</a>
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

		return(

      <div>
        { noFeature }
        <ul className="timeline-header-buttons-list">
          <li>{ friendButton }</li>
        </ul>
      </div>
		);
	}
});

module.exports = TimelineButtons;
