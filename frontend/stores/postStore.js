var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/postConstants');
var PostStore = new Store(Dispatcher);

var _posts = {};

var resetPosts = function (posts) {
  _posts = {};
	posts.forEach(function (post) {
    _posts[post.id] = post;
  });
};

var resetPost = function (post) {
  _posts[post.id] = post;
};

var removePost = function (post) {
	delete(_posts[post.id]);
};

PostStore.all = function () {
  var posts = [];
  for (var id in _posts) {
    posts.push(_posts[id]);
  }
  posts.reverse();

  return posts;
};

PostStore.find = function (id) {
  return _posts[id];
};

PostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PostConstants.ALL_POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
    case PostConstants.POST_RECEIVED:
      resetPost(payload.post);
      PostStore.__emitChange();
      break;
		case PostConstants.POST_DELETED:
			removePost(payload.post);
			PostStore.__emitChange();
			break;
  }
};

module.exports = PostStore;
