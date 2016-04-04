var Dispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/postConstants');

var PostActions = {
	receiveSinglePost: function (post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

	receiveEditedPost: function (post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_EDITED,
      post: post
    });
  },
	receiveAllPosts: function (posts) {
    Dispatcher.dispatch({
      actionType: PostConstants.ALL_POSTS_RECEIVED,
      posts: posts
    });
  },
	postDeleted: function (post) {
		Dispatcher.dispatch({
			actionType: PostConstants.POST_DELETED,
			post: post
		});
	}
};

module.exports = PostActions;
