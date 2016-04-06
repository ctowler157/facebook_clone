var ApiUtil = require('./apiUtil');
var FriendRequestActions = require('../actions/friendRequestActions');

var FriendRequestUtil = {
	fetchPendingRequests: function() {
		ApiUtil.ajax({
			url: "/api/friend_requests",
			method: "GET",
			success: function (requests) {
        FriendRequestActions.receivePendingRequests(requests);
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	fetchRequestsWithUser: function(senderId) {
		ApiUtil.ajax({
			url: "/api/friend_requests/" + senderId,
			method: "GET",
			success: function (request) {
        FriendRequestActions.receiveUserRequest(request);
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	createRequest: function (formData) {
		ApiUtil.ajax({
			url: "/api/friend_requests",
			method: "POST",
			form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (request) {
				FriendRequestActions.receiveNewRequest(request);
				resetForms();
			},
			error: function (response) { console.log("FAILURE\n" + response);
		}
	});
},

};
module.exports = FriendRequestUtil;
