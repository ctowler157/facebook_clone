var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var AuthConstants = require('../constants/authConstants');
var AuthStore = new Store(Dispatcher);

console.log('loaded AuthStore!');

var _currentUser = { online: false };

var setCurrentUser = function (user) {
  _currentUser = user;
	_currentUser.online = true;
};

var logOutCurrentUser = function () {
	_currentUser = { online: false };
};

AuthStore.getCurrentUser = function () {
  var user = {};
	user.userId = _currentUser.userId;
	user.email = _currentUser.email;
	user.online = _currentUser.online;
	return user;
};

AuthStore.isLoggedIn = function () {
	var loggedIn = true;
	if (_currentUser.online === false) {
		loggedIn = false;
	}
	return loggedIn;
};

AuthStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AuthConstants.CURRENT_USER_RECEIVED:
      setCurrentUser(JSON.parse(payload.currentUser));
			console.log('emitting change!');
      AuthStore.__emitChange();
      break;
    case AuthConstants.CURRENT_USER_DELETED:
      logOutCurrentUser();
      AuthStore.__emitChange();
      break;
  }
};

module.exports = AuthStore;
