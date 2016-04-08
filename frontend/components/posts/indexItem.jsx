var React = require('react');
var PostUtil = require('../../util/postUtil.js');
var Modal = require('react-modal');

var PostIndexItem = React.createClass({
  getInitialState: function () {
    return({ editing: false, body: this.props.post.body,
      // modalIsOpen: false,
      dropDownState: " hidden" });
  },

  // openModal: function() {
  //   this.setState({ modalIsOpen: true });
  // },
  //
  // closeModal: function() {
  //   this.setState({ modalIsOpen: false });
  // },

  _handleEdit: function (event) {
    event.preventDefault();
    // pop up editor
    this.hideDropDown();
    this.setState({ editing: true, modalIsOpen: true });
  },

  cancelEdit: function (event) {
    // this.hideDropDown();
    this.setState({ editing: false, modalIsOpen: false });
  },

  submitEdit: function (event) {
    event.preventDefault();

    // this.setState({ dropDownState: " hidden" });
    // this.hideDropDown();
    var postId = this.props.post.id;
    var formData = new FormData();
    formData.append("post[body]", this.state.body);
    PostUtil.updatePost(formData, postId, this.cancelEdit);
    this.setState({ editing: false, modalIsOpen: false });
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
    // if (e === undefined ||
      // e.currentTarget.className !== "post-drop-down-button") {
      this.setState({ dropDownState: " hidden"});
    // }
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
            return interval + " hrs";
        }
        if (interval === 1) {
            return "1 hr";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 40) {
            return "1 hr";
        }
        if (interval > 1) {
            return interval + " mins";
        }
        return "moments ago";
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
      dropDown = (
        <div className={ "post-drop-down" + this.state.dropDownState }
          onBlur={ this.hideDropDown }>
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
      menuButton = (
        <button className="post-drop-down-button"
          onClick={ this.toggleDropDownState }
          >  </button>
      );
    }
//---------------conditional rendering----------------------
    // if (this.state.editing === true){
    //   return (
    //     <li className="post-list-item edit-post">
    //       <form>
    //         <section className="post-item-header">
    //           <nav className="edit-post-heading">
    //             <ul><li><h3 className="edit-status">Edit Post</h3></li></ul>
    //             <button className="cancel-edit-button"
    //               onClick={ this.cancelEdit }></button>
    //           </nav>
    //           <div className="post-pic-and-input post-form-version clear-fix">
    //             <img className="profile-pic-thumb post-form-version"
    //               src={ post.author.profile_pic_url } />
    //             <div className="post-input-padding">
    //               <input className="post-input" type="textArea" value={ this.state.body }
    //                 onChange={ this._updateBody }/>
    //             </div>
    //           </div>
    //         </section>
    //         <section className="bottom-of-post-form clear-fix">
    //           <button className="submit-edit-button blue-button"
    //             onClick={ this.submitEdit }>Save</button>
    //         </section>
    //       </form>
		// 	</li>
    //   );
    // } else {

    var profileModalStyle = {
      content : {
        padding                 :  '0px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius           : '3px'
      },
      overlay : {
        backgroundColor   : 'rgba(95, 95, 95, 0.75)'
      }
    };
  		return(
        // <div>


  			<li className="post-list-item">
          <Modal
            isOpen={this.state.editing}
            onRequestClose={this.cancelEdit}
            style={profileModalStyle} >
            <form className="editing-form-window">
              <section className="post-item-header">
                <nav className="edit-post-heading">
                  <ul><li><h3 className="edit-status">Edit Post</h3></li></ul>
                  <button className="cancel-edit-button"
                    onClick={ this.cancelEdit }></button>
                </nav>
                <div className="post-pic-and-input post-form-version clear-fix">
                  <img className="profile-pic-thumb post-form-version"
                    src={ post.author.profile_pic_url } />
                  <div className="post-input-padding">
                    <input className="post-input" type="textArea" value={ this.state.body }
                      onChange={ this._updateBody }/>
                  </div>
                </div>
              </section>
              <section className="bottom-of-post-form clear-fix">
                <button className="submit-edit-button blue-button"
                  onClick={ this.submitEdit }>Save</button>
              </section>
            </form>
          </Modal>

          <section className="post-item-header">
            <div className="post-author-pic-container clear-fix">
              <img className="profile-pic-thumb"
                src={ post.author.profile_pic_url } />
            </div>
            { menuButton }
            <div>{ authorString }{ postArrow }{ recipientString }</div>
            <p className="timestamp">{ elapsed }</p>
          </section>
          <section className="post-body-section">
            <p className="post-body">{ post.body }</p>
          </section>
          { dropDown }
  			</li>

      // </div>
  	 );
   }
  }
);

module.exports = PostIndexItem;
