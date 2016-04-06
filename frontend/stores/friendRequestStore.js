var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/sessionConstants');
var FriendRequestStore = new Store(Dispatcher);

console.log('loaded FriendRequestStore!');

var _requests = {  };

var setRequest = function (request) {
  _requests[request.id] = request;
};

var removeRequest = function (request) {
	delete(_requests[request.id]);
};

var setRequests = function (requests) {
	_requests = {};
	requests.forEach(function (request) {
    _requests[request.id] = request;
  });
};


FriendRequestStore.isRequested = function (currentUserId, timelineId) {
	var request;
  for (var id in _requests) {
		request = _requests.id;
		if (request.sender_id == currentUserId &&
			request.target_id == timelineId) {
				return "Request sent";
			}
		if (request.sender_id == timelineId &&
			request.target_id == currentUserId) {
				return "Respond to request";
		}
	}

	return "Add Friend";
};


FriendRequestStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FriendRequestConstants.USER_REQUEST_RECEIVED:
      setRequest(payload.request);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.NEW_REQUEST_RECEIVED:
			setRequest(payload.request);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.REQUEST_ACCEPTED:
			removeRequest(payload.request);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.REQUEST_REJECTED:
			removeRequest(payload.request);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.REQUESTS_RECEIVED:
			setRequests(payload.requests);
      FriendRequestStore.__emitChange();
      break;
  }
};

module.exports = FriendRequestStore;
