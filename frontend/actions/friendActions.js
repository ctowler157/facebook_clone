var Dispatcher = require('../dispatcher/dispatcher');
var FriendConstants = require('../constants/friendConstants');

var FriendActions = {
	receiveFriends: function (friends) {
    Dispatcher.dispatch({
      actionType: FriendConstants.FRIENDS_RECEIVED,
      friends: friends
    });
  },

	friendshipOver: function (friendships) {
    Dispatcher.dispatch({
      actionType: FriendConstants.FRIENDSHIP_OVER,
      friendships: friendships
    });
  }
};

module.exports = FriendActions;
