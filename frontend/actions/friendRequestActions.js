var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friendRequestConstants');

var FriendRequestActions = {
	receiveUserRequest: function (request) {
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.USER_REQUEST_RECEIVED,
      request: request
    });
  },

	// receiveEditedFriendRequest: function (request) {
  //   Dispatcher.dispatch({
  //     actionType: FriendRequestConstants.POST_EDITED,
  //     request: request
  //   });
  // },
	receivePendingRequests: function (requests) {
		Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUESTS_RECEIVED,
      requests: requests
    });
  },
	// requestDeleted: function (request) {
	// 	Dispatcher.dispatch({
	// 		actionType: FriendRequestConstants.POST_DELETED,
	// 		request: request
	// 	});
	// }
};

module.exports = FriendRequestActions;
