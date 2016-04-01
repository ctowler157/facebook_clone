var ApiUtil = require('./apiUtil');
var SessionActions = require('../actions/sessionActions');

var UserUtil = {
	// fetchCurrentUser: function (completion) {
	// 	ApiUtil.ajax({
	// 		url: "/api/session",
	// 		method: "GET",
	// 		success: function (user) {
	// 			if (user.message === "Not logged in" ) {
	// 				SessionActions.receiveNoCurrentUser();
	// 			} else {
	// 				SessionActions.receiveCurrentUser(user);
	// 			}
	// 		 },
	// 		error: function (response) {
	// 			console.log("FAILURE\n" + response);
	// 		 },
	// 		complete: function () {
	// 			if (completion){
	// 				completion();
	// 			}
	// 		}
	// 	});
	// },

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
