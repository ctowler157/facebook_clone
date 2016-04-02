var ApiUtil = require('./apiUtil');
var PostActions = require('../actions/postActions');

console.log("Loaded PostUtil!");

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

	updatePost: function (id, body) {
    // var uriString = "post=%5Bbody%5D=";
    // uriString += encodeURI(body);
		ApiUtil.ajax({
			url: "/api/posts/" + id,
			method: "PATCH",
      form: true,
			data: body,
			contentType: false,
			processData: false,
			success: function (post) {
        PostActions.receiveSinglePost(post); },
			error: function (response) { console.log("FAILURE\n" + response); },
		});
	}
};

module.exports = PostUtil;
