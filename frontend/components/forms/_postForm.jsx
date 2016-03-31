var React = require('react');
var PostUtil = require('../../util/postUtil.js');
// var PostActions = require('../../actions');

var PostForm = React.createClass({
	getInitialState: function () {
		var author = this.props.user;
		return { body: "", authorId: author.userId };
	},

	updateBody: function (event) {
		this.setState({ body: event.currentTarget.value });
	},

	handleClick: function () {
		if (this.state.body !== "") {
			this.tryCreatePost();
		}
	},

	clearForms: function () {
		this.setState({ body: "" });
	},

	tryCreatePost: function() {
		var formData = new FormData();
		formData.append("post[author_id]", this.state.authorId);
		formData.append("post[timeline_id]", this.state.authorId);
		formData.append("post[body]", this.state.body);

		PostUtil.tryCreatePost(formData, this.clearForms);
	},

	render: function () {
		return(
			<div className="post-form">
				<input type="text" className="post-form-body-input" value={ this.state.body} onChange={ this.updateBody }/>
				<button type="button" className="post-form-submit" onClick={ this.handleClick }>Post</button>
			</div>
		);
	}
});

module.exports = PostForm;
