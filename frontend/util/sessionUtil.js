var ApiUtil = require('./apiUtil');
var SessionActions = require('../actions/sessionActions');

console.log("Loaded SessionUtil!");

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
				console.log("FAILURE\n" + response);
			 },
			complete: function () {
				if (completion){
					completion();
				}
			}
		});
	},

	tryLogIn: function (formData) {

		console.log("Made it to tryLogIn in SessionUtil!");

		ApiUtil.ajax({
			url: "/api/session",
			method: "POST",
			form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (user) { SessionActions.receiveCurrentUser(user); },
			error: function (response) { console.log("FAILURE\n" + response); },
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
