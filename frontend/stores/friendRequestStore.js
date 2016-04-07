var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friendRequestConstants');
var FriendRequestStore = new Store(Dispatcher);

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

FriendRequestStore.getAllRequests = function () {
  var requests = {};
  for (var id in _requests){
    requests[id] = _requests[id];
  }
  return requests;
};

FriendRequestStore.getRequest = function () {
  var request = {};
  for (var id in _request){
    request[id] = _request[id];
  }
  return request;
};


FriendRequestStore.isRequested = function (timelineId) {
	if (_request.id == "NO REQUEST") {
    console.log("none");
		return "no request";
	}
	else if (timelineId == _request.target_id){
    console.log("sent");
		return "sent";
	}
  else if (timelineId == _request.sender_id) {
    console.log("received");
		return "received";
	} else { debugger}
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
