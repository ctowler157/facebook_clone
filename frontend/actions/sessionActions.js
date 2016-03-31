var Dispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/sessionConstants');

var SessionActions = {
	receiveCurrentUser: function (user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      currentUser: user
    });
  },
	receiveNoCurrentUser: function () {
    Dispatcher.dispatch({
      actionType: SessionConstants.NO_USER_RECEIVED,
    });
  },
	logOutCurrentUser: function (_obj) {
		Dispatcher.dispatch({
			actionType: SessionConstants.CURRENT_USER_DELETED
		});
	}
};

module.exports = SessionActions;
