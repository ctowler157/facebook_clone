var ApiUtil = require('./apiUtil');
var SessionActions = require('../actions/sessionActions');
var UserActions = require('../actions/userActions');

var UserUtil = {
	fetchTimelineUser: function (id) {
		ApiUtil.ajax({
			url: "/users/" + id,
			method: "GET",
			success: function (user) {
				UserActions.receiveTimelineUser(user);
			 },
			error: function (response) {
				console.log("FAILURE\n" + response);
			 }
		});
	},

	trySignUp: function (formData) {

		ApiUtil.ajax({
			url: "/users",
			method: "POST",
			form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (user) {
        user.type = "new";
        SessionActions.receiveCurrentUser(user);
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

};

module.exports = UserUtil;
