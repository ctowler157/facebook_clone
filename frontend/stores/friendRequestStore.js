var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friendRequestConstants');
var FriendRequestStore = new Store(Dispatcher);

var _requests = {  };

var _request = { id: "NO REQUEST" };

var setRequest = function (request) {
  _request = request;
};

var removeRequest = function (friend) {
  var removeId;
  for (var id in _requests){
    if (_requests[id].target_id == friend.id && _requests[id].sender_id == friend.new_friend_id) {
      removeId = id;
    }
  }
  _request = { id: "NO REQUEST" };
	delete(_requests[removeId]);
};

var setRequests = function (requests) {
	_requests = {};
	requests.forEach(function (request) {
    _requests[request.id] = request;
  });
};

FriendRequestStore.getAllRequests = function () {
  var requests = [];
  for (var id in _requests){
    requests.push(_requests[id]);
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

FriendRequestStore.setRequestStatus = function (timelineId, currentUserId) {
  var request;
  for (var id in _requests){
    request = _requests[id];
    if ((request.sender_id == timelineId && request.target_id == currentUserId) ||
      (request.sender_id == currentUserId && request.target_id == timelineId)){
        _request = request;
    }
  }
};


FriendRequestStore.isRequested = function (timelineId) {
	if (_request.id == "NO REQUEST") {
		return "no request";
	}
	else if (timelineId == _request.target_id){
		return "sent";
	}
  else if (timelineId == _request.sender_id) {
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
			removeRequest(payload.friend);
      FriendRequestStore.__emitChange(payload.friend);
      break;
    case FriendRequestConstants.REQUEST_REJECTED:
			removeRequest(payload.friend);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.REQUESTS_RECEIVED:
			setRequests(payload.requests);
      FriendRequestStore.__emitChange();
      break;
  }
};

module.exports = FriendRequestStore;
