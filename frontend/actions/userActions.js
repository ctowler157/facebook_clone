var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

var UserActions = {
	receiveTimelineUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.TIMELINE_USER_RECEIVED,
      user: user
    });
  },

  receiveNewBio: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.BIO_RECEIVED,
      user: user
    });
  }
};

module.exports = UserActions;
