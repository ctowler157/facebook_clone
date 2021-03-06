var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friendRequestConstants');

var FriendRequestActions = {
	receiveUserRequest: function (request) {
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.USER_REQUEST_RECEIVED,
      request: request
    });
  },

	receiveNewRequest: function (request) {
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.NEW_REQUEST_RECEIVED,
      request: request
    });
  },

	receiveAcceptedRequest: function (friend) {
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUEST_ACCEPTED,
      friend: friend
    });
  },

	receiveRejectedRequest: function (friend) {
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUEST_REJECTED,
      friend: friend
    });
  },

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
