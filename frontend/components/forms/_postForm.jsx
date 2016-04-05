var React = require('react');
var PostUtil = require('../../util/postUtil.js');
// var PostActions = require('../../actions');

var PostForm = React.createClass({
	getInitialState: function () {
		var authorId;
    if (this.props.user !== undefined) {
      authorId = this.props.user.userId;
    }
		return { body: "", authorId: authorId };
	},

	componentDidMount: function () {
		var authorId;
    if (this.props.user !== undefined) {
      authorId = this.props.user.userId;
    }
		this.setState({ body: "", authorId: authorId });
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
		formData.append("post[timeline_id]", this.props.timelineId);
		formData.append("post[body]", this.state.body);

		PostUtil.tryCreatePost(formData, this.clearForms);
	},

	render: function () {
		return(
			<div className="post-form clear-fix">
        <div className="post-author-pic-thumb clear-fix" />
        <div className="post-input-padding">
          <input type="textarea" className="post-form-body-input post-input"
              value={ this.state.body} onChange={ this.updateBody }/>
        </div>
        <div className="bottom-of-post-form clear-fix">
          <button type="button" className="post-form-submit blue-button"
            onClick={ this.handleClick }>Post</button>
        </div>
			</div>
		);
	}
});

module.exports = PostForm;
