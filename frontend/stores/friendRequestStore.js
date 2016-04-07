var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friendRequestConstants');
var FriendRequestStore = new Store(Dispatcher);

console.log('loaded FriendRequestStore!');

var _requests = {  };

var _request = { id: "not set" };

var setRequest = function (request) {
  _request = request;
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


FriendRequestStore.isRequested = function (timelineId) {
  console.log("calling isRequested");
	if (_request.id == "NO REQUEST") {
    console.log("none");
		return "none";
	}
	else if (timelineId == _request.target_id){
    console.log("sent");
		return "sent";
	}
	else {
    console.log("received");
		return "received";
	}
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
