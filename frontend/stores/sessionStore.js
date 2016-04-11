var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/sessionConstants');
var SessionStore = new Store(Dispatcher);

var currentUserFetched = false;

var _currentUser = { online: false };

var setCurrentUser = function (user) {
  _currentUser = user;
	_currentUser.online = true;
};

var logOutCurrentUser = function () {
	_currentUser = { online: false };
};

SessionStore.userFetched = function () {
	return currentUserFetched;
};

SessionStore.getCurrentUser = function () {
  var user = {};
  for (var id in _currentUser) {
    user[id] = _currentUser[id];
  }
	return user;
};

SessionStore.isLoggedIn = function () {
	var loggedIn = true;
	if (_currentUser.online === false) {
		loggedIn = false;
	}
	return loggedIn;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      setCurrentUser(payload.currentUser);
			currentUserFetched = true;
      SessionStore.__emitChange();
      break;
    case SessionConstants.NO_USER_RECEIVED:
			currentUserFetched = true;
      SessionStore.__emitChange();
      break;
    case SessionConstants.CURRENT_USER_DELETED:
      logOutCurrentUser();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
