var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var FriendConstants = require('../constants/friendConstants');
var FriendRequestConstants = require('../constants/friendRequestConstants');
var FriendStore = new Store(Dispatcher);

var _friends = { };

var setFriends = function (friends) {
  _friends = {};
	friends.forEach(function (friend) {
    _friends[friend.id] = friend;
  });
};

var addFriend = function (friend) {
  _friends[friend.id] = friend;
};

var removeFriendship = function (friendships) {
  var ids = [
    friendships.id,
    friendships.corresponding_friendship_id
  ];
  friends = FriendStore.getFriendsArr();
  for (var i = 0; i < friends.length; i++){
    var friend = friends[i];
    if (friend.friendshipId == ids[0] ||
          friend.friendshipId == ids[1]){
      delete(_friends[friend.id]);
      break;
    }
  }
};



FriendStore.getFriendsObj = function () {
	friends = {};
	for (var id in _friends) {
		friends[id] = _friends[id];
	}
	return friends;
};

FriendStore.getFriendshipId = function (id) {
  if (_friends[id]){
    return _friends[id].friendshipId;
  } else {
    return "no friendship";
  }
};

FriendStore.getFriendsArr = function () {
	friends = [];
	for (var id in _friends) {
		friends.push(_friends[id]);
	}
	return friends;
};

FriendStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FriendConstants.FRIENDS_RECEIVED:
      setFriends(payload.friends);
      FriendStore.__emitChange();
      break;
    case FriendConstants.FRIENDSHIP_OVER:
			removeFriendship(payload.friendships);
      FriendStore.__emitChange();
      break;
		case FriendRequestConstants.REQUEST_ACCEPTED:
			addFriend(payload.friend);
			FriendStore.__emitChange();
  }
};

module.exports = FriendStore;
