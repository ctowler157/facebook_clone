var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');
var UserStore = new Store(Dispatcher);

var timelineUserFetched = false;

var _timelineUser = {} ;

var setTimelineUser = function (user) {
  _timelineUser = user;
};

var resetTimelineUser = function () {
	_timelineUser = { };
};

UserStore.userFetched = function () {
	return timelineUserFetched;
};

UserStore.getTimelineUser = function () {
  var user = {};
  if (_timelineUser !== {} ) {
  	var keys = Object.keys(_timelineUser);
  	keys.forEach(function (key) {
  		user[key] = _timelineUser[key];
  	});
    user.userId = _timelineUser.id;
  }
  return user;
};

// UserStore.isLoggedIn = function () {
// 	var loggedIn = true;
// 	if (_timelineUser.online === false) {
// 		loggedIn = false;
// 	}
// 	return loggedIn;
// };

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.TIMELINE_USER_RECEIVED:
      setTimelineUser(payload.user);
			timelineUserFetched = true;
      UserStore.__emitChange();
      break;
    case UserConstants.BIO_RECEIVED:
      setTimelineUser(payload.user);
			timelineUserFetched = true;
      UserStore.__emitChange();
      break;
    // case UserConstants.NO_USER_RECEIVED:
		// 	timelineUserFetched = true;
    //   UserStore.__emitChange();
    //   break;
    // case UserConstants.CURRENT_USER_DELETED:
    //   logOutTimelineUser();
    //   UserStore.__emitChange();
    //   break;
  }
};

module.exports = UserStore;
