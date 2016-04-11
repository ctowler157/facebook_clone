var ApiUtil = require('./apiUtil');
var PostActions = require('../actions/postActions');

var PostUtil = {
	// getCurrentUser: function () {
	//
	// },
	fetchAllPosts: function() {
		ApiUtil.ajax({
			url: "/api/posts",
			method: "GET",
			success: function (posts) {
			PostActions.receiveAllPosts(posts); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	fetchAllTimelinePosts: function(timelineId) {
		ApiUtil.ajax({
			url: "/api/posts",
			method: "GET",
			success: function (posts) {
        var timelinePosts = [];
        posts.forEach(function (post) {
          if (post.timeline_id == timelineId) {
            timelinePosts.push(post);
          }
        });
			  PostActions.receiveAllPosts(timelinePosts);
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	tryCreatePost: function (formData, resetForms) {
		ApiUtil.ajax({
			url: "/api/posts",
			method: "POST",
			form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (post) {
				PostActions.receiveSinglePost(post);
				resetForms();
			},
			error: function (response) { console.log("FAILURE\n" + response); }
		});
	},

	deletePost: function (id) {
		ApiUtil.ajax({
			url: "/api/posts/" + id,
			method: "DELETE",
			success: function (post) {
        PostActions.postDeleted(post); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	},

	updatePost: function (formData, id, cancelEdit) {
		ApiUtil.ajax({
			url: "/api/posts/" + id,
			method: "PATCH",
      form: true,
			data: formData,
			contentType: false,
			processData: false,
			success: function (post) {
        PostActions.receiveSinglePost(post);
        cancelEdit();
      },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	}
};

module.exports = PostUtil;
