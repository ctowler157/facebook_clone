var Dispatcher = require('../dispatcher/dispatcher');
var AuthConstants = require('../constants/authConstants');

var AuthActions = {
	receiveCurrentUser: function (user) {
    Dispatcher.dispatch({
      actionType: AuthConstants.CURRENT_USER_RECEIVED,
      currentUser: user
    });
  },
	logOutCurrentUser: function (_obj) {
		Dispatcher.dispatch({
			actionType: AuthConstants.CURRENT_USER_DELETED
		});
	}
};

module.exports = AuthActions;
