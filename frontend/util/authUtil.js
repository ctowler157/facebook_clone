var ApiUtil = require('./apiUtil');
var AuthActions = require('../actions/authActions');

console.log("Loaded AuthUtil!");

var AuthUtil = {
	// getCurrentUser: function () {
	//
	// },
	fetchCurrentUser: function () {
		//do this, maybe fetch from cookie?
	},

	tryLogIn: function (formData) {

		console.log("Made it to tryLogIn in AuthUtil!");

		ApiUtil.ajax({
			url: "/session",
			method: "POST",
			form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (user) { AuthActions.receiveCurrentUser(user); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	logOut: function () {
		ApiUtil.ajax({
			url: "/session",
			method: "DELETE",
			success: function (_obj) { AuthActions.logOutCurrentUser(_obj); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	}
};

module.exports = AuthUtil;
