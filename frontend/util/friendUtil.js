var ApiUtil = require('./apiUtil');
var FriendActions = require('../actions/friendActions');

var FriendUtil = {
	fetchFriends: function(userId) {
		ApiUtil.ajax({
			url: "/api/friendships/" + userId,
			method: "GET",
			success: function (friends) {
        FriendActions.receiveFriends(friends);
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	removeFriend: function (friendshipId) {
		ApiUtil.ajax({
			url: "/api/posts/" + friendshipId,
			method: "DELETE",
			success: function (friendships) {
				FriendActions.friendshipOver(friendships); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	}
};
module.exports = FriendUtil;
