var React = require('react');
var PostUtil = require('../../util/postUtil.js');

var PostIndexItem = React.createClass({
  getInitialState: function () {
    return({ editing: false, body: this.props.post.body,
      dropDownState: " hidden" });
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

  toggleDropDownState: function (e) {
    if (this.state.dropDownState === "") {
      this.setState({ dropDownState: " hidden"});
    } else {
      this.setState({ dropDownState: ""});
    }
  },

  hideDropDown: function (e) {
    this.setState({ dropDownState: " hidden"});
  },

	render: function () {
		var post = this.props.post;
    var authorString = (
      <a href={ "#/user/" + post.author_id } className="name-link"
        >{ post.author.first_name } { post.author.last_name }</a>
    );

// -----------Time since posted-----------------------------
    function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    var createdAt = Date.parse(post.created_at);

    var elapsed = timeSince(createdAt);

// -----------Wall Posts in timeline-----------------------------
    var NEWS_FEED_CONSTANT = "NEWS_FEED";
    var recipientString;
    var postArrow;
    var recipient = post.recipient;

    if (this.props.timelineId === NEWS_FEED_CONSTANT &&
      post.author_id != recipient.id) {
      recipientString = (
        <a href={ "#/user/" + recipient.id } className="name-link"
          >{ recipient.first_name } { recipient.last_name }</a>
      );

      postArrow = (
        <div className="post-arrow clear-fix">  <u> trick </u>  </div>
      );
    }
// -----------------------------------------------------------

// --------------Author Post Edit menu--------------------------

    var dropDown;
    var menuButton;
    if (post.author_id === this.props.user.id){
      menuButton = (
        <button className="post-drop-down-button"
          onClick={ this.toggleDropDownState }
          onBlur={ this.hideDropDown }>  </button>
      );
      dropDown = (
        <div className={ "post-drop-down" + this.state.dropDownState }>
          <ul className="post-options-drop-down">
            <li>
              <a className="post-options-item" href="#"
                onClick={ this._handleDelete }>Delete</a>
            </li>
            <li>
              <a className="post-options-item" href="#" name="post[body]"
              onClick={ this._handleEdit }>Edit Post</a>
            </li>
          </ul>
        </div>
      );
    }
//---------------conditional rendering----------------------
    if (this.state.editing === true){
      return (
        <li className="post-list-item edit-post">
          <form>
          <section className="post-item-header">
            <div className="post-author-pic-thumb clear-fix" />
            <button className="cancel-edit-button"
              onClick={ this.cancelEdit }></button>
            <div className="post-input-padding">
              <input className="post-input" type="textArea" value={ this.state.body }
                onChange={ this._updateBody } />
            </div>
          </section>
          <section className="bottom-of-post-form clear-fix">
            <button className="submit-edit-button blue-button"
              onClick={ this.submitEdit }>Save</button>
          </section>
        </form>
  			</li>
      );
    } else {
  		return(
  			<li className="post-list-item">
          <section className="post-item-header">
            <div className="post-author-pic-thumb clear-fix" />
            { menuButton }
            <div>{ authorString }{ postArrow }{ recipientString }</div>
            <p className="timestamp">{ elapsed + " ago" }</p>
          </section>
          <section className="post-body-section">
            <p className="post-body">{ post.body }</p>
          </section>
          { dropDown }
  			</li>
  	 );
   }
  }
});

module.exports = PostIndexItem;
