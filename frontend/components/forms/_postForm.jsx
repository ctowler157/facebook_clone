var React = require('react');
var PostUtil = require('../../util/postUtil.js');
var Modal = require('react-modal');
// var PostActions = require('../../actions');

var PostForm = React.createClass({
	getInitialState: function () {
    var NEWS_FEED_CONSTANT = "NEWS_FEED";
    var timelineId = this.props.timelineId;
    if (timelineId === NEWS_FEED_CONSTANT) {
      timelineId = this.props.user.id;
    }
		return({ body: "", timelineId: timelineId, noFeature: false });
	},

	componentDidMount: function () {
	},

	updateBody: function (event) {
		this.setState({ body: event.currentTarget.value });
	},

	handleClick: function () {
		if (this.state.body !== "") {
			this.tryCreatePost();
		}
	},

  preventRedirect: function (e) {
    e.preventDefault();
  },

	clearForms: function () {
		this.setState({ body: "" });
	},

  openNoFeature: function (e) {
    e.preventDefault();
    this.setState({ noFeature: true });
  },
  closeNoFeature: function (e) {
    this.setState({ noFeature: false });
  },

	tryCreatePost: function() {
		var formData = new FormData();
		formData.append("post[author_id]", this.props.user.id);
		formData.append("post[timeline_id]", this.state.timelineId);
		formData.append("post[body]", this.state.body);

		PostUtil.tryCreatePost(formData, this.clearForms);
	},

	render: function () {
    var navClass = "post-form-top-nav";
    // var navItems = ["Post", "Photo/Video"];
    var navItems = ["Post", "Photo"];

    var noFeatureModalStyle = {
      content : {
        padding                 : '20px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius            : '3px'
      }
    };
    var noFeature = (
      <Modal
        isOpen={this.state.noFeature}
        onRequestClose={this.closeNoFeature}
        style={noFeatureModalStyle} >
        <p className="modal-text">This feature is coming soon!</p>
      </Modal>
    );

    if (this.props.timelineId === "NEWS_FEED") {
      navClass += " news-feed-post-form";
      // navItems = ["Update Status", "Add Photo/Video", "Create Photo Album"];
      navItems = ["Update Status", "Add Photo"];
    } else {
      navClass += " timeline-post-form";
      if (this.props.user.id == this.props.timelineId) {
        // navItems = ["Status", "Photo/Video", "Life Event"];
        navItems = ["Status", "Photo"];
      }
    }
    var preventDefault = this.openNoFeature;
    var navItemsList = (navItems.map(function (item, i) {
      return (
        <li key={ i }>
          <a href="#" onClick={ preventDefault }>{ item }</a>
        </li>
      );
    }));

    var navBar = (
      <nav className={ navClass }>
        <ul>{ navItemsList }</ul>
      </nav>
    );
		return(
			<div className="post-form">
        { noFeature }
        { navBar }
        <div className="post-pic-and-input feed-version clear-fix">
          <img className="profile-pic-thumb post-form-version"
            src={ this.props.user.profile_thumb_url } />
          <div className="post-input-padding">
            <input type="textarea" className="post-form-body-input post-input"
                value={ this.state.body} onChange={ this.updateBody }/>
          </div>
        </div>
        <div className="bottom-of-post-form clear-fix">
          <button type="button" className="post-form-submit"
            onClick={ this.handleClick }>Post</button>
        </div>
			</div>
		);
	}
});

module.exports = PostForm;
