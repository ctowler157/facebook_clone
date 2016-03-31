var React = require('react');

var PostIndexItem = React.createClass({

	render: function () {
		var post = this.props.post;

		return(
			<li className="post-list-item">
				<p>{ post.body }</p>
				<p>Author posted this at { post.created_at }</p>
			</li>
	 );
	}
});

module.exports = PostIndexItem;
