var React = require('react');
var PostUtil = require('../../util/postUtil.js');

var PostIndexItem = React.createClass({
  getInitialState: function () {
    return({ editing: false, body: this.props.post.body });
  },

  _handleEdit: function (event) {
    event.preventDefault();
    // pop up editor
    this.setState({ editing: true });
  },

  cancelEdit: function (event) {
    this.setState({ editing: false });
  },

  submitEdit: function (event) {
    event.preventDefault();
    var postId = this.props.post.id;
    var formData = new FormData();
    formData.append("post[body]", this.state.body);
    PostUtil.updatePost(formData, postId, this.cancelEdit);
  },

  _handleDelete: function (event) {
    event.preventDefault();
    // popup confirmation, pass this as callback?
    PostUtil.deletePost(this.props.post.id);
  },

  _updateBody: function(event) {
    this.setState({ body: event.currentTarget.value });
  },

	render: function () {
		var post = this.props.post;

    var buttons;
        if (post.author_id === this.props.user.id){
      buttons = (
        <div className="post-options-drop-down">
          <a className="post-options-item" href="#" name="post[body]"
            onClick={ this._handleEdit }>Edit Post</a>
          <a className="post-options-item" href="#"
            onClick={ this._handleDelete }>Delete</a>
        </div>
      );
    }

    if (this.state.editing === true){
      return (
        <li className="post-list-item edit">
          <form>

          <input type="textArea" value={ this.state.body }
            onChange={ this._updateBody } />
          <button className="cancel-edit-button"
            onClick={ this.cancelEdit }>Cancel</button>
          <input type="submit" className="submit-edit-button"
            onClick={ this.submitEdit } value="Save"/>
        </form>
  			</li>
      );
    } else {
  		return(
  			<li className="post-list-item">
          { buttons }
  				<p>{ post.body }</p>
  				<p>{ post.author.first_name } posted this at { post.created_at }</p>
  			</li>
  	 );
   }
  }
});

module.exports = PostIndexItem;
