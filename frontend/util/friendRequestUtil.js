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

	fetchRequestsWithUser: function(timelineId) {
		ApiUtil.ajax({
			url: "/api/friend_requests/" + timelineId,
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
			},
			error: function (response) { console.log("FAILURE\n" + response);
			}
		});
	},

	updateRequest: function (formData, requestId) {
		ApiUtil.ajax({
			url: "/api/friend_requests/" + requestId,
			method: "PATCH",
      form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (request) {
				// error handle
        if (request.accepted){
					FriendRequestActions.receiveAcceptedRequest(request);
				} else {
					FriendRequestActions.receiveRejectedRequest(request);
				}
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	}

};
module.exports = FriendRequestUtil;
