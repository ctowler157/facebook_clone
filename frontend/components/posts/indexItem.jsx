var React = require('react');

var PostIndexItem = React.createClass({
  _handleEdit: function (event) {
    // pop up editor
  },

  _handleDelete: function (event) {
    // popup confirmation
  },

	render: function () {
		var post = this.props.post;

    var buttons;
        if (post.author_id === this.props.user.id){
      buttons = (
        <div className="post-options-drop-down">
          <a className="post-options-item" href="#"
            onClick={ this._handleEdit }>Edit Post</a>
          <a className="post-options-item" href="#"
            onClick={ this._handleDelete }>Delete</a>
        </div>
      );
    }
		return(
			<li className="post-list-item">
        { buttons }
				<p>{ post.body }</p>
				<p>{ post.bio.first_name } posted this at { post.created_at }</p>
			</li>
	 );
	}
});

module.exports = PostIndexItem;
