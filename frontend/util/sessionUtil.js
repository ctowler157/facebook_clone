var ApiUtil = require('./apiUtil');
var SessionActions = require('../actions/sessionActions');

var SessionUtil = {
	fetchCurrentUser: function (completion) {
		ApiUtil.ajax({
			url: "/api/session",
			method: "GET",
			success: function (user) {
				if (user.message === "Not logged in" ) {
					SessionActions.receiveNoCurrentUser();
				} else {
					SessionActions.receiveCurrentUser(user);
				}
			},
			error: function (response) {
				// SessionActions.loginFailed(response);
			},
			complete: function () {
				if (completion){
					completion();
				}
			}
		});
	},

	tryLogIn: function (formData, failureCallback) {

		ApiUtil.ajax({
			url: "/api/session",
			method: "POST",
			form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (user) { SessionActions.receiveCurrentUser(user); },
			error: function (response) {
        failureCallback();
      },
		});
	},

	logOut: function () {
		ApiUtil.ajax({
			url: "/api/session",
			method: "DELETE",
			success: function (_obj) { SessionActions.logOutCurrentUser(_obj); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	}
};

module.exports = SessionUtil;
