var React = require('react');
var PostUtil = require('../../util/postUtil.js');
var PostStore = require('../../stores/postStore');
var PostIndexItem = require('./indexItem');

var PostIndex = React.createClass({
	getInitialState: function () {
		return({ posts: [] });
	},

	componentDidMount: function () {
		this.postListener = PostStore.addListener(this._onChange);
    if (this.props.timelineId === undefined){
      PostUtil.fetchAllPosts();
    } else {
      PostUtil.fetchAllTimelinePosts(this.props.timelineId);
    }
	},

  componentWillUnmount: function () {
    this.postListener.remove();
  },

	_onChange: function () {
		this.setState({ posts: PostStore.all() });
	},

	render: function () {
    var user = this.props.user;
		return(
		 <ul>
			 { this.state.posts.map(function (post) {
				 return <PostIndexItem key={ post.id } post={ post } user={ user } />;
			 }) }
		 </ul>
	 );
	}
});

module.exports = PostIndex;
